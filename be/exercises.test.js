const mockingoose = require('mockingoose');
const Exercise = require('./models/exercise');

const fetchExercises = () => Exercise.find({})


  describe('Exercise Model', () => {
    describe('get list of exercises', () => {
      it ('should return the list of exercises', async () => {
        mockingoose(Exercise).toReturn([
            {
                exercise:'Abs',
                activity:'Crunch'
            },
            {
                exercise:'Abs',
                activity:'Lower Leg Raise'
            }
        ], 'find');
        const results = await fetchExercises();
        expect(results[0].activity).toBe('Crunch');
      });
    });
  });