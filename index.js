require('dotenv').config();
const connection = require('./Config/db');
const cors = require('cors');
const express = require('express');
const project = require('./Routes/project');
const task = require('./Routes/task');
const person = require('./Routes/person');
const bodyParser = require('body-parser');
const app = express();

connection();

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/persons", person);
app.use("/api/projects", project);
app.use("/api/tasks", task);

const port = process.env.APP_PORT || 8080;
app.listen(port, () => console.log(`run: http://127.0.0.1:${ port }`));