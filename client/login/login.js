Router.map(function () {
	this.route('login', {path: '/login'});
});

	//Check if there is a user, if not allow creation of admin account (The account creation needs to be handled on the server side)
	Template.login.events({
		'click .login': function(evt, template){
			var user = template.find('.name').value;
			var pass = template.find('.password').value;
			
			console.log('attemptimng login...');
			var key = Meteor.call('loginAdmin', user, pass);
			console.log(Session.get('key'));
			if (key != 'error')
				Session.set('key', key);
			else console.log(key);

			console.log(Session.get('key'));
			return;
		}
	});
