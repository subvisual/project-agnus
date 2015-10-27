ReplyedSurveys = new Mongo.Collection('replyedSurveys');

ReplyedSurveys.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

ReplyedSurveys.before.update(function (userId, doc) {
  doc.updatedAt = Date.now();
});
