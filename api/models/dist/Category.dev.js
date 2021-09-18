"use strict";

var mongoose = require('mongoose');

var CategoryShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Category", CategoryShema);