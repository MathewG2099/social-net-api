const { Thought,User,Reaction } = require('../models')
const {Types} = require('mongoose');

// Define the ThoughtController object, which contains methods for handling various API requests related to thoughts
const ThoughtController = {
    async getAllThoughts(req, res) {
      try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    // Handler for the "get thought by ID" API endpoint
    async getThoughtsById(req, res) {
      try {
        const thought = await Thought.findOne({_id:req.params.thoughtId});
        if (!thought) {
          res.status(404).json({ message: 'Thought not found' });
        } else {
          res.json(thought);
        }
      } catch (err) {
        res.status(500).json(err);
      }
    },