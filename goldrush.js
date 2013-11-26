Router.map(function () {
  this.route('home', {
    path: '/' // match the root path
  });
});

var total = 4937;
var incTotal = 0;

if (Meteor.isClient) {
Meteor.subscribe("goldRush");

  Template.home.total = function () {
    //setInterval(function () { if(incTotal < total) incTotal + total/100; }, 50);
    //if(incTotal < total) incTotal += total/100;
    return total;
    //return GoldRush.find({total: 1});
  }

  Template.home.rendered = function() {
    $('.counter').counter();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}