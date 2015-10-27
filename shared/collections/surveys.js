Surveys = new Mongo.Collection('surveys');

Surveys.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});
