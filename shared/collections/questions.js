Questions = new Mongo.Collection('questions');

Questions.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});
