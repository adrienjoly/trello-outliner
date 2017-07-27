/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-buttons': function(t, opts) {
    // check that viewing member has write permissions on this board
    if (opts.context.permissions.board !== 'write') {
      return [];
    }
    return t.get('member', 'private', 'token')
    .then(function(token){
      return [{
        icon: 'https://github.com/adrienjoly/trello-outliner/raw/master/icon.png',
        text: 'Outline a comment',
        callback: function(context) {
          if (!token) {
            context.popup({
              title: 'Authorize Your Account',
              url: './auth.html',
              height: 75
            });
          } else {
            return context.popup({
              title: 'Outline a comment',
              url: './comment-selector.html',
              height: 411
            });
          }
        }
      }];
    });
  },
});
