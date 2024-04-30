// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');

// Hit parade, classé du premier au dernier.
const hitParade = [
    {
        position: 1,
        artist: `Jain`,
        title: `Come`
    },
    {
        position: 2,
        artist: `Matt Simons`,
        title: `Catch & Realease`
    },
    {
        position: 3,
        artist: `Twety One Pilots`,
        title: `Stressed Out`,
    },
    {
        position: 4,
        artist: `Justin Bieber`,
        title: `Love Yourself`,
    },
    {
        position: 5,
        artist: `Kids United`,
        title: `On écrit sur les murs`,
    },
    {
        position: 6,
        artist: `Rihanna`,
        title: `Work`,
    },
    {
        position: 7,
        artist: `Julian Perretta`,
        title: `Miracle`,
    },
    {
        position: 8,
        artist: `Yall`,
        title: `Hundred Miles`,
    },
    {
        position: 9,
        artist: `Kendji Girac`,
        title: `No Me Mirès Màs`,
    },
    {
        position: 10,
        artist: `Feder`,
        title: `Blind (feat. Emmi)`,
    },
];

let songCount = 0;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    switch(request.url) {
        case '/': 
            songCount++;
            response.end('Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock');
            break;
        case '/classement':
            let classement = '';
            for (const song of hitParade) {
                classement += `${song.position} : ${song.artist} - ${song.title}\n`
            }
            response.end(classement);
            break;
        case '/stats':
            response.end(`La chanson a été chantée ${songCount} fois`);
            break;
        default:
        
            response.end('Erreur 404 : que faites-vous ici ???');
    }
});

server.listen(3000);