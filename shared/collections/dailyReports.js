DailyReports = new Mongo.Collection('dailyReports');

DailyReports.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});

DailyReports.before.update(function (userId, doc) {
  doc.updatedAt = Date.now();
});
