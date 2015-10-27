var chartData = {
  labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter"],
  datasets: [
    {
      label: "Team Stats",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [0, 0, 0, 0]
    },
    {
      label: "Your Stats",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [0, 0, 0, 0]
    }
  ]
};

Template.overview.onCreated(function() {
  var self = this;
  self.overviewChart = new ReactiveVar();

  Tracker.autorun(() => {
    Meteor.subscribe('replyedSurveys');
    var chart = self.overviewChart.get();

    self.teamStats = getStats(ReplyedSurveys.find().fetch());
    self.userStats = getStats(ReplyedSurveys.find({userId: Meteor.userId()}).fetch());

    if (!chart)
      return;

    var updatePoint = (point, index) => { point.value = self.teamStats[index]; };

    chart.datasets[0].points.forEach(updatePoint);
    chart.datasets[1].points.forEach(updatePoint);

    chart.update();
  });
});

Template.overview.onRendered(() => {
  var template = Template.instance();

  var ctx = $("#overviewChart").get(0).getContext("2d");

  template.overviewChart.set(new Chart(ctx).Line(chartData));
});

function getStats(surveys) {
  var scores = { 1: 0, 2: 0, 3: 0, 4: 0 };

  if (!surveys)
    return scores;

  var reduceScores = (scores = 0, score) => { return Number(scores) + Number(score); };

  var getScores = (survey) => {
    var quarter = moment(survey.createdAt).quarter();
    var sumedScores = _.reduce(_.values(survey.scores), reduceScores);
    scores[quarter] = (sumedScores / _.values(survey.scores).length).toFixed(2);
  };

  surveys.forEach(getScores);

  return _.values(scores);
}
