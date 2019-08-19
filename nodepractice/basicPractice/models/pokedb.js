let nerds = require('nerds');

let poke = nerds.resolve('Pokemon').asArray();

console.log(poke);

module.exports = poke;

// function reqAndRes(req, res) {
//     res.end(`${req.body}`);
// }

// console.log(reqAndRes());
// module.exports = reqAndRes;