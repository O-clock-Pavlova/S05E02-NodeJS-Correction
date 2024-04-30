const http = require('http');

// exo en autonomie

// on reprend le tableau des bonjours

// on le transforme en objet dont les noms de propriété sont le code ISO 639-1 de chaque langue (le "nom" de la langue en 2 lettres, comme "fr" pour français, par exemple)

// et le visiteur va maintenant devoir renseigner sa langue dans l'url : http://localhost:3000/hy par exemple pour l'arménien, /fr pour le français etc.

// bonus velu : fouillez dans l'objet requête à la recherche d'un entête HTTP qui parle de langue... une fois que vous l'avez, ne conditionnez plus la réponse sur l'url mais sur la première langue mentionnée dans cet entête

// correction
const bonjours = {
    hy: 'Barev',
    la: 'Ave',
    sk: 'Dobré ráno',
    no: 'Hei'
};

const server = http.createServer((req, res) => {
    // comme la langue slovaque n'a pas connu de réforme entre l'exo précédent et maintenant
    res.setHeader('Content-Type', 'text/plain;charset=utf8');

    // le substr(1) permet d'ignorer le / qui est toujours le premier caractère de cette propriété
    const lang = req.url.substr(1);
    // pour le bonus : const lang = req.headers['accept-language'].substr(0,2)

    if (bonjours.hasOwnProperty(lang)) {
        res.write(bonjours[lang]);
    } else {
        res.write('Langue non reconnue');
    }

    // notez bien que ce callback, appelé pour chaque requête, peut contenir à peu près n'importe quoi
    // des boucles, des tableaux, des objets, des switchs, des appels à d'autres fonctions etc.
    // the sky is the limit !

    res.end();
});

server.listen(3000);