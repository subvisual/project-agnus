Template.overview.onCreated(function() {
  var self = this;
  self.overviewChart = new ReactiveVar();

  self.chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Team Stats",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [1]
      },
      {
        label: "Your Stats",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [1]
      }
    ]
  }

  Tracker.autorun(function() {
    var chart = self.overviewChart.get();

    self.teamStats = getStats(ReplyedSurveys.find().fetch());
    self.userStats = getStats(ReplyedSurveys.find({userId: Meteor.userId()}).fetch());

    if (!chart)
      return;

    chart.datasets[0].points.forEach(function(point, index) {
      point.value = self.teamStats[index];
    });
    chart.datasets[1].points.forEach(function(point, index) {
      point.value = self.userStats[index];
    });

    chart.update();
  });
});

Template.overview.onRendered(function() {
  var template = Template.instance();

  var ctx = $("#overviewChart").get(0).getContext("2d");

  template.overviewChart.set(new Chart(ctx).Line(template.chartData));
});

function getStats(surveys) {
  var scores = 0;

  if (!surveys)
    return;

  surveys.forEach(function(replyedSurvey) {
    scores = _.reduce(_.values(replyedSurvey.scores), function(memo, score) {
      return Number(memo) + Number(score);
    });
  });

  return [scores];
}
