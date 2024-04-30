// rebelote, on est toujours pas demain, donc oubliez cette ligne
const http = require('http');

// et c'est parti pour l'exo en autonomie

// créez un tableau qui contient "Bonjour" dans 4 langues différentes, au choix
// un peu d'aide polyglotte https://www.freelang.com/expressions/bonjour.php

// puis créez un serveur, sur le même port (donc il faudra couper le précédent, ou mieux versionnez un seul et unique script qui prend du galon)
// qui affiche "Bonjour"... dans une langue aléatoire :-) (vous pouvez aller chercher dans la S2 une version déjà écrite d'un générateur de nombre aléatoire)

// bonus : en HTML, s'il vous plaît !

// correction
const bonjours = [
    /* arménien */ 'Barev',
    /* latin */ 'Ave',
    /* slovaque */ 'Dobré ráno',
    /* norvégien */ 'Hei'
];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pas là, malheureux ! sinon ça sera tout le temps la même langue
//bonjour = bonjours[random(0, 3)];

const server = http.createServer((req, res) => {
    // (premier jet de correction)

    // bon, ok, les navigateurs modernes reconnaissent le type d'une réponse
    // mais Mamie et son IE6, on y pense à Mamie ?
    // de façon générale, c'est toujours mieux d'annoncer le type de réponse qu'on va renvoyer ;-)
    res.setHeader('Content-Type', 'text/html');

    // (après avoir testé)

    // ouch, le slovaque passe moyennement bien :-/ faudrait indiquer au navigateur qu'on utilise des caractères spéciaux
    res.setHeader('Content-Type', 'text/html;charset=utf8');

    // on choisit aléatoirement ce qu'on va afficher
    bonjour = bonjours[random(0, 3)];
    // maintenant que le serveur a annoncé qu'il parlerait HTML, il n'y a plus qu'à
    res.write('<h1>' + bonjour + '</h1>');
    // ne pas l'oublier, celui-là
    res.end();
});

server.listen(3000);

// OKAY ! Formidable ! on sait dire bonjour dans plein de langues...
// mais l'aléatoire, c'est bof, non ? Je sais pas pour vous mais je ne parle pas arménien couramment, perso

// on a le temps ? on aime les défis ?
// un deuxième exo en autonomie attend ici server-counter.js

// ouhla, il est déjà 20h30 ?
// go routes.js