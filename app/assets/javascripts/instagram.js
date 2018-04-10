$( document ).on('turbolinks:load', function() {
  var feed = new Instafeed({
    get: 'user',
    userId: '5795008810',
    accessToken: '689297533.1677ed0.17c203355c474f588f1883a674605488'
  });
  feed.run();
  console.log(feed);
})
