const mongoose = require('mongoose');
const { userData, thoughtData } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDatabase() {
  try {
    await User.deleteMany();
    await Thought.deleteMany();

    // Seed users
    const users = await User.insertMany(userData);

    // Seed thoughts with reactions
    for (const thought of thoughtData) {
      const newThought = await Thought.create(thought);
      const user = users.find(user => user.username === thought.username);
      user.thoughts.push(newThought);
      await user.save();
    }

    console.log('Database seeded successfully with users, thoughts, and reactions.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
