SurveysSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  author: {
    type: String,
    label: 'Author'
  },
  questions: {
    type: [String],
    optional: true
  }
});

Surveys.attachSchema(SurveysSchema);
