const mongoose = require("mongoose");

function totalLikeCountForAll(req, res) {
  var result = [];
  mongoose.connection.db.collection('Posts', async (err, model) => {
    if (!err) {
      const aggregate = model.aggregate([
        {
          $group: {
            _id: "$user.uid",
            user: {
              $first: "$user"
            },
            total_likes: {
              $sum: "$likes"
            }
          }
        }, {
          $project: {
            _id: 0
          }
        }
      ])

      for await (const doc of aggregate) {
        result.push(doc);
      }

      res.json(result);

    } else {
      res.json({ message: err })
    }
  })
}

function totalLikeCountByUserId(req, res) {
  mongoose.connection.db.collection('Posts', async (err, model) => {
    if (!err) {
      const aggregate = model.aggregate([
        {
          $match:
          {
            'user.uid': req.params.uid,
          }
        },
        {
          $group: {
            _id: "$user.uid",
            user: {
              $first: "$user"
            },
            total_likes: {
              $sum: "$likes"
            }
          }
        }, {
          $project: {
            _id: 0
          }
        }
      ])

      for await (const doc of aggregate) {
        res.json(doc)
      }

    } else {
      res.json({ message: err })
    }
  })
}

module.exports = {
  totalLikeCountForAll: totalLikeCountForAll,
  totalLikeCountByUserId: totalLikeCountByUserId
}