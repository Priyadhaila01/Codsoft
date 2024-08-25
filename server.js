const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/project-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Project Schema
const projectSchema = new mongoose.Schema({
  name: String
});

const Project = mongoose.model('Project', projectSchema);

// Task Schema
const taskSchema = new mongoose.Schema({
  name: String,
  deadline: Date,
  projectId: mongoose.Schema.Types.ObjectId
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/projects', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
