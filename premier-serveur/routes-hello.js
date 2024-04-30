const http = require("http");

const bonjours = {
    hy: "Barev",
    la: "Ave",
    sk: "Dobré ráno",
    no: "Hei",
};

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf8");

    const lang = req.url.substr(1); // localhost:3000/hy

    // req.url = /fr
    // req.url.substr(1) = fr
    // hy

    if (bonjours.hasOwnProperty(lang)) { // true
        res.write(bonjours[lang]);
    } else {
        res.write('Langue non reconnue');
    }

    res.end();
});

server.listen(3000);
