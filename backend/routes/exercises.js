const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { exerciseName, score, level } = req.body;

  const newExercise = new Exercise({
    exerciseName,
    score,
    level
  });

  newExercise
    .save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        if (!exercise) {
          return res.status(404).json('Exercise not found');
        }
  
        exercise.exerciseName = req.body.exerciseName;
        exercise.score = req.body.score;
        exercise.level = req.body.level;
  
        exercise
          .save()
          .then(() => res.json('Exercise updated'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;