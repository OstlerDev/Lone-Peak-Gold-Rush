Router.map(function () {
  this.route('login', {path: '/login'});
});
if (Meteor.isClient) {
	//Check if there is a user, if not allow creation of admin account (The account creation needs to be handled on the server side)
	Template.login.events({
		'click .login': function(evt, template){
			var user = template.find('.name').value;
			var pass = template.find('.password').value;
			if (Meteor.users.find().count() === 0){
				Accounts.createUser({username: user, password: pass});
				console.log('creating user...')
				return;
			}
			console.log('logging in...');
			Meteor.loginWithPassword(user,pass);
			return;
		}
	})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}