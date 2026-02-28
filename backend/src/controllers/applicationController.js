const Application = require('../models/Application');
const Job = require('../models/Job');

// POST /api/applications
const submitApplication = async (req, res) => {
  try {
    const { job_id, name, email, resume_link, cover_note } = req.body;

    const job = await Job.findById(job_id);
    if (!job) return res.status(404).json({ error: 'Job not found.' });

    const application = new Application({ job_id, name, email, resume_link, cover_note });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully.', application });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { submitApplication };