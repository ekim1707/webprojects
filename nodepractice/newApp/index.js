// const http = require('http');
// *replace http with express
const express = require('express');

const Todo = require('./models/Todo');
const User = require('./models/User');
const { sanitizeBody } = require('express-validator');
const es6Renderer = require('express-es6-template-engine');

// Create server and call it "app"=
const app = express();
// Asking express to use Renderer as template engine:
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// "static assets" like CSS, JS, and images
// will go in the "public" folder:
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req, res) => {
    res.render('index', {
        locals: {
            message: 'It is time for lunch'
        },
        partials: {
            // rendering engine is always looking in the "views" folder
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

app.get('/profile', (req, res) => {
    res.render('profile', {
        locals: {
            displayname: '',
            username: '',
        },
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    })
})

app.get('/profile/todos', async (req, res) => {
    const userId = 1; // using hard coded id for now
    const theUser = await User.getOne(userId);

    res.render('todos', {
        locals: {
            todos: theUser.todos
        },
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    })
})

// 1. Allow the user to GET the form for creating a to-do
app.get('/profile/todos/create', (req, res) => {
    // Render the "create new todo" form template
    res.render('create-todo', {
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

// 2. Process the body of the form they POST
app.post('/profile/todos/create', [
    sanitizeBody('task').escape()
], async (req, res) => {
    // Handle the req.body from the "create new todo" form
    console.log(req.body);
    // normally, we don't include the user id in the form.
    // When you log into a site, it keeps track of your
    // id for you.
    req.body.priority = 1;
    const taskId = await User.createTodo(req.body, req.body.user_id);
    res.send(taskId);
});

// Use the urlencoded middleman
// to read POST bodies

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

app.post('/users', [
    sanitizeBody('username').escape(),
    sanitizeBody('displayname').escape()
], async (req, res) => {
    console.log('Post request');
    // .send() (specific to express) is different from .end()
    // res.send('good job');

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