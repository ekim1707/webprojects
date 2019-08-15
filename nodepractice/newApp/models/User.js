// 1. Collect and prep ingredients
const db = require('../db');

// 2. Cook.
async function getAll() {
    const data = await db.any(`
    select * from users
    `)
    return data;
}

// this is what we want to return for one user
// {
//     id: 1,
//     displayname: 'alice',
//     username: '3l33th4x0r',
//     todos: [
//         {id:1, task: 'walk the cat down the street.'},
//         {}
//         {}
//     ]
// }

async function getOne(id) {
    try {
    const user = await db.one(`
    select * from users where id=$1
    `, [id]);
    const todosForUser = await db.any(`
    select * from todos where user_id=$1
    `, [id]);

    user.todos = todosForUser;
    return user;
    } catch (error) {
        console.log('There was an error');
        return {
            id: 0,
            displayname: 'No user found.'
        };
    }

    // .then((user) => {
        // get the Todos for this user.
        // const todos = db.any(`
        //     select * from todos where user_id=$1
        // `, [id])
        // .then((todosForUser) => {
        //     console.log(todosForUser);
        // })

        // this is a separate inner promise
        // chain that needs to be linked with
        // the outer promise chain in order to
        // be accessed:

        // .then((todosForUser) => {
        //     console.log(todosForUser);
        //     user.todos = todosForUser;
        //     return user;
        // })
        // todos.catName = "Jeff";

        // link the chains by matching the
        // variable in outer chain with the
        // previous inner chain

    //     return todos;
    // })
    // .then((userWithCat) => {
    //     console.log('MEOW!');

        // You can return normal data from database

        // return userWithCat;

        // Or you can return whatever you want that 
        // has nothing to do with the database:
        // return {
        //     id: 0,
        //     displayname: 'haha you got hacked'
        // }

    // })
    // .catch((error) => {
    //     console.log('Error getting user.');
    //     console.log(error);
    // })
}

// 3. Serve
module.exports = {
    getAll,
    getOne,
};