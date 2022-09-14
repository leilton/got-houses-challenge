'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  region: {
    type: String,
    trim: true,
    required: true
  },
  founded: {
    type: String,
    trim: true,
  },
  currentLord: {
    type: String,
    trim: true,
  }}, {
    timestamps: true
});

module.exports = mongoose.model('houses', schema, 'houses');