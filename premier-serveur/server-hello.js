const http = require('http');

const bonjours = [
    /* arménien */ 'Barev',
    /* latin */ 'Ave',
    /* slovaque */ 'Dobré ráno',
    /* norvégien */ 'Hei'
];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf8');

    const bonjour = bonjours[random(0, 3)];
    res.write('<h1>' + bonjour + '</h1>');
    res.end(); 
});

server.listen(3000);