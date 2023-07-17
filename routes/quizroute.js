const express = require("express");
const { QuizModel } = require("../schema/quizschema");

const quizRouter = express.Router();

quizRouter.post("/quiz", async (req, res) => {
  try {
    const { creator, title, description, questions } = req.body;

    const quiz = new QuizModel({
      quiz: {
        creator,
        title,
        description,
        questions,
      },
    });

    await quiz.save();
    res.status(200).json({ message: "Quiz submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to fetch all quizzes
quizRouter.get("/quiz", async (req, res) => {
  try {
    const quizzes = await QuizModel.find();

    res.status(200).json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

quizRouter.get('/quiz/:id', async (req, res) => {
    try {
      const quizId = req.params.id;
      const quiz = await QuizModel.findById(quizId);
      
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
  
      res.json({ quiz });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = {
  quizRouter,
};
