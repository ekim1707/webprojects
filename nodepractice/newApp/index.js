// const http = require('http');
// *replace http with express
const express = require('express');

const Todo = require('./models/Todo');
const User = require('./models/User');

// Create server and call it "app"=
const app = express();
const port = 3000;

// const server = http.createServer((req, res) => 
// *replace with app.get()
// (when '/' is the route, express will use the 'req, res' 
// function after it to handle the req/res)
// app.get('/todos', (req, res) => {
//     console.log('You got a request');
//     const allTodos = Todo.getAll();
//     allTodos
//         .then((data) => {
//             console.log('OMG');
//             console.log(data);
//             // res.end(JSON.stringify(data));
//             res.json(data);
//         })
//     // res.end(allTodos);
// });

app.get('/todos/:taskId', (req, res) => {
    // adds a programmatic breakpoint for the Chrome Dev Tools:
    debugger;

    console.log('task');
    const integer = parseInt(req.params.taskId, 10);
    const allTodos = Todo.getOne(integer);
    // const allTodos = Todo.getAll();
    allTodos
        .then((data) => {
            console.log('OMG');
            console.log(data);
            // res.end(JSON.stringify(data));
            res.json(data);
        })
});

app.get('/users', async (req, res) => {
    const allUsers = await User.getAll();
    res.json(allUsers);
});

app.get('/users/:userId', async (req, res) => {
    const theId = parseInt(req.params.userId, 10);
    const aUser = await User.getOne(theId);
    res.json(aUser);
});

app.listen(port);