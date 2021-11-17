const express = require('express');
const app = express();
const cors = require('cors');
const {pool} = require('../db/db');

const port = 5000;

//middleware
//used for route handler request to services/platforms
app.use(cors()) 
//gives access to req.body in json and req.params in routes
app.use(express.json()) 

//ROUTE HANDLERS

//create a task
app.post('/todos', async(req, res) => {
    try {
        const {description} = req.body;
        //$1 is a placeholder for the description value
        const newTask = await pool.query(
            "INSERT INTO todo(description) VALUES ($1) RETURNING *",
            [description]
        );
        res.json(newTask.rows[0]);
        //console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
});

//get a task
app.get('/todos', async(req, res) => {
    try {
        const allTasks = await pool.query("SELECT * FROM todo");
        res.json(allTasks.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get task by id
app.get('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const task = await pool.query("SELECT * FROM todo WHERE id =$1", [id])
        res.json(task.rows[0]);
    } catch (error) {
       console.error(error);
    }
});

//update a task by id
app.put('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params; //parameter in of http request
        const {description} = req.body; //body of json data
        const updateTask = pool.query("UPDATE todo SET description = $1 WHERE id = $2",
            [description, id]
        );
        res.json("Task updated!")
    } catch (error) {
        console.error(error.message);
    }
});

//delete a task
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTask = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
        res.json("Task was deleted!");
    } catch (error) {
        console.error(error.message);
    }
});




app.listen(port, () => {
    console.log(`Server started on ${port}`);
});