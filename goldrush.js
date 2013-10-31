Router.map(function () {
  this.route('home', {
    path: '/' // match the root path
  });
});

if (Meteor.isClient) {
Meteor.subscribe("goldRush");
  Template.home.total = function () {
    return '0.00';
    //return GoldRush.find({total: 1});
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}