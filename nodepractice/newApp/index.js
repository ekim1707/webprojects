const http = require('http');
const Todo = require('./models/Todo');

const server = http.createServer((req, res) => {
    console.log('You got a request');
    const allTodos = Todo.getAll();
    allTodos
        .then((data) => {
            console.log('OMG');
            console.log(data);
            res.end(JSON.stringify(data));
        })
    // res.end(allTodos);
});

server.listen(3000);