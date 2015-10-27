Surveys = new Mongo.Collection('surveys');

Surveys.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

Surveys.before.update(function (userId, doc) {
  doc.updatedAt = Date.now();
});
