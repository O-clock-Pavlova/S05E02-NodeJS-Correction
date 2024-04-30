const http = require("http");

let counter = 0;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain;charset=utf8");
  counter++;
  res.write(`Déjà ${counter} visiteur(s) sur ce serveur !`);
  res.end(''); //permet d'envoyer
});

server.listen(3000);