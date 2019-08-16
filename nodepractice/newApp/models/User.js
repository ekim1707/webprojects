// 1. Collect and prep ingredients
const db = require('../db');

// 2. Cook.
async function getAll() {
    const users = await db.any(`
    select * from users
    `)
    const arrayOfPromises = users.map( async user => {
        const userTodos = await db.any(`SELECT * FROM todos where user_id=$1`, [user.id]);
        user.todos = userTodos;
        console.log(user);
        return user;
    })
    console.log('\n\n\n\n============');
    console.log(arrayOfPromises);

    const arrayOfUsersWithTodos = await Promise.all(arrayOfPromises);
    console.log('array');
    console.log(arrayOfUsersWithTodos);
    return arrayOfUsersWithTodos;
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

// accept an object argument so we have flexibility later on
// That is, we can add more database columns without having
// to update all of our function calls
async function createUser({ displayname, username }) {
    // const { displayname, username } = userDataObj; (replaced
    // by destructured argument parameter above, which
    // accomplishes the same thing)
    const newUserInfo = await db.one(`
        insert into users
            (displayname, username)
        values ($1, $2)

        returning id

    `, [displayname, username]);

    console.log(newUserInfo);

    return newUserInfo;
}

async function createTodo({ priority, task, status }, theId) {
    const newTodo = await db.one(`
        insert into todos
            (priority, task, status, user_id)
        values ($1, $2, $3, $4)

        returning id

    `, [priority, task, status, theId]);

    return newTodo;
}

// createUser({
//     displayname: 'lalalala',
//     username: 'zazazazaza'
// });

// 3. Serve
module.exports = {
    getAll,
    getOne,
    createUser,
    createTodo
};