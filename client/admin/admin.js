Router.map(function () {
	this.route('admin');
});

	//Check if there is a user logged in
	Template.admin.checkUser = function(){
		if (Meteor.user() === null && Router.current() != null && Router.current().path === '/admin'){
			console.log('No user logged in... Rerouting...');
			Router.go('login');
		}
	}
	//Check if user is admin, if not reroute them to login with session error setting of "Error: User not admin! Please login as an admin!"
