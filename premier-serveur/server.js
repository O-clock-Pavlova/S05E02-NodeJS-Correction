// on oublie cette ligne pour aujourd'hui, on en parle... demain :-)
const http = require('http');

// on "crée" un serveur web et on décrit son "comportement"
const server = http.createServer( (req, res) => {
  // quand je reçois une requête, quelle qu'elle soit, voilà ce que je ferai

  // je préparerai une réponse : "Bonjour"
  res.write('Bonjour');
  // et je l'enverrai
  res.end();

  // important, si vous oubliez d'appeler end() sur l'objet réponse, la réponse ne sera pas envoyée
  // et le client pensera que le serveur ne lui répond pas (alors qu'il manque juste l'instruction d'envoyer le message qu'on a rédigé)
});

// là tout de suite, le serveur existe, il est prêt, il sait quoi faire quand on le sollicitera
// mais ce qu'il ne sait pas, c'est où écouter les demandes de sollicitation

// d'ailleurs, si on lance le programme maintenant, il s'arrête tout seul : vous avez créé un serveur, ok... et c'est tout ? ok, bon ben COUPEZ !

// parler ports en détails tout de suite, c'est un peu comme donner un crabe à manger à un enfant qui apprend à se servir d'une fourchette : oui mais non
// du coup, on va noter ça dans un coin de notre tête pour plus tard
// et en attendant, on va dire à notre serveur d'écouter le port 3000 (musique mystérieuse en fond), parce que c'est comme ça
// et on va aller le contacter sur ce port 3000 : http://localhost:3000, parce que c'est comme ça aussi
server.listen(3000);

// vous sentez votre petit coeur battre la chamade ? c'est normal, vous venez de lancer votre premier serveur web et il marche ! et il répond !

// soyons ambitieux, allons faire un tour du côté de http://localhost:3000/bonjour
// il répond "Bonjour" ! Coïncidence ? Essayons http://localhost:3000/comment-t-appelles-tu
// ah... ou il s'appelle vraiment "Bonjour", ou c'était juste une coïncidence

// au cas où vous ne l'auriez pas encore remarqué en S2, JS sait faire plein de choses... mais faut tout lui demander :-)
// on va voir ça très vite, mais on va peut-être déjà commencer par un peu de pratique

// rdv dans server-hello.js