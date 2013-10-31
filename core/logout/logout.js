Router.map(function () {
  this.route('logout', {path: '/logout'});
});
if (Meteor.isClient) {
	Template.logout.redirect = function(){
		if (Meteor.user() != null && Router.current() != null && Router.current().path === '/logout'){
			Meteor.logout();
			console.log('Logged out!');
			Router.go('/');
		}
	}
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}