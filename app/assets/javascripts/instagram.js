$( document ).on('turbolinks:load', function() {
  var feed = new Instafeed({
    get: 'user',
    userId: '5795008810',
    accessToken: '5795008810.3fcedb7.ae03e963af43404c8c8cbe82a2ada513',
    template: '<div class="col-md-3"><a href="{{link}}" target="_blank"><img class={{orientation}} src="{{image}}" /></a></div>',
    resolution: 'standard_resolution',
    limit: 8
  });
  feed.run();
  console.log(feed);
})
