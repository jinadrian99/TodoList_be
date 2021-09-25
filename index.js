const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
// const connection = require('./Config/db');

// connection();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const project = require('./Routes/project');
// const task = require('./Routes/task');
// const person = require('./Routes/person');

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

// app.use("/api/persons", person);
// app.use("/api/projects", project);
// app.use("/api/tasks", task);

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => console.log(`run: http://127.0.0.1:${ PORT }`));