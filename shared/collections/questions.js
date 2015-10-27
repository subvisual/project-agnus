Questions = new Mongo.Collection('questions');

Questions.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

Questions.before.update(function (userId, doc) {
  doc.updatedAt = Date.now();
});
