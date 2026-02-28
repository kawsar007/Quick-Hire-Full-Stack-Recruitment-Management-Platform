const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Engineering', 'Design', 'Marketing', 'Sales', 'Finance', 'HR', 'Operations', 'Other'],
    },
    description: { type: String, required: true },
    salary: { type: String, default: '' },
    type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Remote'],
      default: 'Full-time',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);