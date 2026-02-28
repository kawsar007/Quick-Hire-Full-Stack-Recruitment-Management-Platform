const express = require('express');
const router = express.Router();
const { getAllJobs, getJobById, createJob, deleteJob } = require('../controllers/jobController');
const { validateJob } = require('../middleware/validate');

router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/', validateJob, createJob);
router.delete('/:id', deleteJob);

module.exports = router;