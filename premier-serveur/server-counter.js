// demain, on a dit !
const http = require('http');

// 2e exo en autonomie

// on l'a vu : on peut déclarer une variable dans notre code et y accéder depuis la fonction de callback
// mais on doit pouvoir la modifier aussi, non ?
// vérifions cette hypothèse en créant un compteur de visites (à l'ancienne #xiti)

// pour celà, on va initialiser un compteur à 0

// et à chaque requête :
// 1. on l'incrémente
// 2. on affiche "Déjà X visiteur(s) sur ce serveur !"

// bonus : quand le compteur dépasse 100, afficher "Déjà une foule de visiteurs sur ce serveur !"
// > 300 : "Déjà une légion de visiteurs sur ce serveur !!"
// > 1000 : "Déjà une myriade de visiteurs sur ce serveur !!!"
// > 1500 : "Facebook n'a qu'à bien se tenir !!!!"

// astuce : maintenir F5 dans le navigateur pour tricher ;-)

// correction
let counter = 0;

const server = http.createServer((req, res) => {
    // roooh, les accents...
    res.setHeader('Content-Type', 'text/plain;charset=utf8');

    counter++;
    res.write('Déjà ' + counter + ' visiteur(s) sur ce serveur !');
    res.end();
});

server.listen(3000);

// bon, le compteur c'est sympa, mais on va faire teeeeellement mieux dans à peu près 5 minutes...
// que vous aurez oublié l'existence de ces petits exos de mise en jambe

// go routes.js