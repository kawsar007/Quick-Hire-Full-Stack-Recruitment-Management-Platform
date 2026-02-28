const validator = require('validator');

const validateJob = (req, res, next) => {
  const { title, company, location, category, description } = req.body;
  const errors = [];

  if (!title || title.trim().length < 2) errors.push('Title must be at least 2 characters.');
  if (!company || company.trim().length < 2) errors.push('Company must be at least 2 characters.');
  if (!location || location.trim().length < 2) errors.push('Location is required.');
  if (!category) errors.push('Category is required.');
  if (!description || description.trim().length < 10) errors.push('Description must be at least 10 characters.');

  if (errors.length > 0) return res.status(400).json({ errors });
  next();
};

const validateApplication = (req, res, next) => {
  const { name, email, resume_link } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.');
  if (!email || !validator.isEmail(email)) errors.push('A valid email address is required.');
  if (!resume_link || !validator.isURL(resume_link)) errors.push('Resume link must be a valid URL.');

  if (errors.length > 0) return res.status(400).json({ errors });
  next();
};

module.exports = { validateJob, validateApplication };