var currentKey = 'asdfghjkl;';
console.log(currentKey);

function checkAdminStatus(username, key){
	console.log('checking!');
	if (currentKey === key && currentKey != 'asdfghjkl;'){
		return true;
	} else {
		return false;
	}
	return false;
}

Meteor.call('loginAdmin', function (username, password){
	console.log('Trying to log admin account.')
	console.log(username);
	console.log(password);
	if (username === 'admin' && password === 'donotsharegr'){
		currentKey = makeKey();
		console.log(currentKey);
		return Session.set('key', currentKey);
	} else {
		return 'error';
	}
})

function makeKey()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}