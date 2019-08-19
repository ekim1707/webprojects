create table users (
    id serial primary key,
    displayname varchar(20) not null,
    username varchar(20) not null
);

create table poke (
    id serial primary key,
    name varchar(20) not null,
    type varchar(40),
    hp integer,
    attack integer,
    defense integer,
    evolves_from varchar(20),
    user_id integer references users(id)
);