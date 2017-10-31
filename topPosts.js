var snoowrap = require('snoowrap');
const r = new snoowrap({
    userAgent: 'morganradic',
    clientId: 'A_EtHItRrL0i6A',
    clientSecret: 'RwXvHAR_beIZR81hzhS1z0gQwIQ',
    refreshToken: '42316489-W0ozardOWQf2mexRSOW2opleL0Q'
  });
var posts = r.getSubreddit('Showerthoughts').getHot().map(post => post.title);
posts.then(console.log);
