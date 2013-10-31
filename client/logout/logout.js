Router.map(function () {
  this.route('logout', {path: '/logout'});
});

	Template.logout.redirect = function(){
		if (Meteor.user() != null && Router.current() != null && Router.current().path === '/logout'){
			Meteor.logout();
			console.log('Logged out!');
			
		}
		Router.go('/');
	}
