const http = require('http');
let nerds = require('nerds');

let poke = nerds.resolve('Pokemon', 3).include(['name']).asGenerator();
let first = poke.next().value.name;
let second = poke.next().value.name;
let third = poke.next().value.name;

function reqAndRes(req, res) {
    res.end(`${first}, ${second}, ${third}`);
}

const server = http.createServer(reqAndRes);

server.listen(3000);