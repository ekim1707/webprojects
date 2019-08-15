const db = require('../db');

function getAll() {
    return db.any(`
    select * from todos;
    `)
        // .then((data) => {
        //     console.log('here is the data:');
        //     console.log(data);
        // })
        .catch((err) => {
            console.log('UH OH.');
            console.log(err);
        })
}

function getOne(id) {
    return db.one(`
        select * from todos where id=$1
    `, [id])
    // .then((data) => {
    //     console.log('here is the data:');
    //     console.log(data);
    // })
    .catch((err) => {
        console.log('UH OH.');
        console.log(err);
    })
}

module.exports = {
    // "Enhanced object literal syntax:
    // This is the same as getAll: getAll
    // (if the key and value have the same name, you can omit the ": <valuename>")
    getAll,
    getOne,
};