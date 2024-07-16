// Importing required dependencies from the mongoose library
const { Schema, model, Types } = require('mongoose'); 
// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
    {
      username: {
          type: String,
          required: true,
          unique: true,
          trim: true,
      },