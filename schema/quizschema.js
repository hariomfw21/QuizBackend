const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  quiz: {
    creator: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    questions: [
      {
        title: {
          type: String,
        },
        answerOptions: {
          type: [String],
        },
        correctOptions: {
          type: [Number],
        },
      },
    ],
  },
  leaderboard: [
    {
      email: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
  ],
});

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = {
  QuizModel,
};
