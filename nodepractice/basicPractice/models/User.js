const db = require('../db');

async function getAll(id) {
    try {
        const user = await db.one(`
            select * from users where id=$1    
        `, [id]);
        const pokeForUser = await db.any(`
            select * from poke where user_id=$1
        `, [id]);

    user.poke = pokeForUser;
    return user;
    } catch (error) {
        console.log('ERROR');
        return {
            id: 0,
            displayname: 'Sorry, no user found.'
        }
    }
}

async function createUser({ displayname, username }) {
    const newUserInfo = await db.one(`
        insert into users
            (displayname, username)
        values ($1, $2)
        
        returning id
    
    `, [displayname, username]);

    return newUserInfo;
}

async function createPoke({ name, type, hp, attack, defense, evolves_from}, theId) {
    const newPokeInfo = await db.one(`
        insert into poke
            (name, type, hp, attack, defense, evolves_from, user_id)
        values ($1, $2, $3, $4, $5, $6, $7)

        returning id
    `, [name, type, hp, attack, defense, evolves_from, theId])

    return newPokeInfo;
}

module.exports = {
    getAll,
    createUser,
    createPoke
}