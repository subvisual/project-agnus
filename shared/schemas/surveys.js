SurveysSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  questions: {
    type: [String],
    optional: true
  }
});

Surveys.attachSchema(SurveysSchema);
