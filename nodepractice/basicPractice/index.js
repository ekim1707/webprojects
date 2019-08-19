const express = require('express');
const { sanitizeBody } = require('express-validator');
const es6Renderer = require('express-es6-template-engine');
const poke = require('./models/pokedb')[0];
const User = require('./models/User');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index', {
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

app.post('/index', [
    sanitizeBody('username').escape(),
    sanitizeBody('displayname').escape(),
], async (req, res) => {
   const newUserInfo = await User.createUser(req.body);
   res.json(newUserInfo);
});

app.get('/user', async (req, res) => {
    const userId = 1;
    const theUser = await User.getAll(userId);

    res.render('profile', {
        locals: {
            displayname: theUser.displayname,
            username: theUser.username,
            pokemon: theUser.poke
        },
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

app.get('/lottery', (req, res) => {
    res.render('lottery', {
        locals: {
            name: poke.name,
            nat_number: poke.national_pokedex_number,
            type: poke.type,
            height: poke.height,
            weight: poke.weight,
            total: poke.total,
            hp: poke.hp,
            attack: poke.attack,
            defense: poke.defense,
            special_att: poke.special_attack,
            special_def: poke.special_defense,
            speed: poke.speed,
            base_exp: poke.base_experience,
            evolves_from: poke.evolves_from
        },
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

app.get('/user/:userId/create', (req, res) => {
    res.render('createapoke', {
        locals: {

        },
        partials: {
            navbar: 'navbar',
            includes: 'includes'
        }
    });
});

app.post('/user/:userId/create', 
    // is there any need to sanitize here with these values?
    async (req, res) => {
    const theId = parseInt(req.params.userId, 10);
   const newPokeInfo = await User.createPoke(req.body, theId);
   res.json(newPokeInfo);
});

const port = 3000;

app.listen(port);