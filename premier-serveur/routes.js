const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf8");

    switch (req.url) {
        case "/bonjour":
            res.write("Oh, bonjour !");
            break;
        case "/comment-t-appelles-tu":
            res.write("Node ! Et toi ?");
            break;
        default:
            res.write("C'est pas très poli de ne pas dire bonjour...");
            break;
    }

    res.end();
});

server.listen(3000);


