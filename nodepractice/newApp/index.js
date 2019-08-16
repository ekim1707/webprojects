// const http = require('http');
// *replace http with express
const express = require('express');

const Todo = require('./models/Todo');
const User = require('./models/User');

// Create server and call it "app"=
const app = express();
const port = 3000;

// Use the urlencoded middleman
// to read POST bodies
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('I am middleware. Yay.');
    console.log(req.url);

    next();
})
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
    // debugger;

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

app.post('/users', async (req, res) => {
    console.log('Post request');
    // .send() (specific to express) is different from .end()
    res.send('good job');

    console.log('here is the module');
    console.log(req.body);

    const newUserInfo = await User.createUser(req.body);
    res.json(newUserInfo);
});

app.post('/users/:userId/todos', async (req, res) => {
    console.log(req.body);
    const theId = parseInt(req.params.userId, 10);
    const newUserTodo = await User.createTodo(req.body, theId);
    res.json(newUserTodo);
});

app.get('/users/:userId/todos', async (req, res) => {
    const aUser = await User.getAll();
    res.json(aUser);
});

app.listen(port);