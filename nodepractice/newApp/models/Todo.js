const db = require('../db');

async function getAll() {
    try{
    return await db.any(`
    select * from todos
    `);
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function getOne(id) {
    try {
    const user = await db.one(`
        select * from todos where id=$1
    `, [id])
    // debugger;
    return user;
    } catch (error) {
        console.log('UH OH');
        console.log(error);
        return {};
    }
    // .then((data) => {
    //     console.log('here is the data:');
    //     console.log(data);
    // })
    // return user;
}

module.exports = {
    // "Enhanced object literal syntax:
    // This is the same as getAll: getAll
    // (if the key and value have the same name, you can omit the ": <valuename>")
    getAll,
    getOne,
};