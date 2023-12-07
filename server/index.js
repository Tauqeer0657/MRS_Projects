


// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://Mitesh:5d81UE2osFaiNzJg@cluster0.rjlqyvs.mongodb.net/Assign?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create Assignment model
// const Assignment = mongoose.model('Assignment', {
//   code: String,
//   assignment: String,
//   from: String,
//   to: String,
//   assign_date: Date,
//   deadline_date: Date,
// });

// app.use(express.json());

// // Route to create a new assignment
// app.post('/assignments', async (req, res) => {
//   try {
//     const assignment = new Assignment(req.body);
//     await assignment.save();
//     res.status(201).send(assignment);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Route to get all assignments
// app.get('/assignments', async (req, res) => {
//   try {
//     const assignments = await Assignment.find();
//     res.send(assignments);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors middleware
const connectDB = require('./config/db');
const assignmentRoutes = require('./routes/assignmentRoutes');

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

// Assign the assignment routes
app.use('/assignments', assignmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
