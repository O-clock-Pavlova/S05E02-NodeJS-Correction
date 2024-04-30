// même rengaine : demain, promis !
const http = require('http');

// pourquoi const au fait ? mini-débat s'il y a le temps
const server = http.createServer((req, res) => {
    // en réponse au débat, essayer de réassigner *par erreur* server ;-) hop, sécurité !
    // server = 13;

    // voilà une info trop cool rien que pour vous
    console.log(req.url);
    res.end();
});

server.listen(3000);

// avec cette info, on peut par exemple créer des réponses aux requêtes précédentes
// pour mémoire : http://localhost:3000/bonjour et http://localhost:3000/comment-t-appelles-tu

// démo

const server =  http.createServer((req, res) => {
    // pour pouvoir écrire avec des accents ;-)
    res.setHeader('Content-Type', 'text/plain;charset=utf8');

    switch (req.url) {
        default:
            res.write("C'est pas très poli de ne pas dire bonjour...");
            break;
        case "/bonjour":
            res.write("Oh, bonjour !");
            break;
        case "/comment-t-appelles-tu":
            res.write("Node ! Et toi ?");
            break;
    }

    res.end();
});

server.listen(3000);

// compris ? Paaaarfait, exo alors ;-)
// rdv routes-hello.js