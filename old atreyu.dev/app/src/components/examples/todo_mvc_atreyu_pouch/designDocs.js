module.exports = [{
  _id: '_design/index',
  views: {
    index: {
      map: function (doc) {
        emit([null, doc.date, doc._id])
        emit([doc.completed, doc.date, doc._id])
      }.toString(),
      reduce: '_count'
    }
  }
}]