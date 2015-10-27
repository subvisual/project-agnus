ReplyedSurveys = new Mongo.Collection('replyedSurveys');

ReplyedSurveys.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});
