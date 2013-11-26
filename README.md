#Gold Rush
##What is Gold Rush?
This website was created by Josh Ostler for a yearly donation drive run by Lone Peak High School. It is a basic front end with a small admin backend that allows the dynamic change of the total.
##How Do I run it?
The website runs on Meteor (http://meteor.com). In order to run it you will need to install Meteor and Meteorite (a simple package manager for meteor).

###Installing Meteor
Meteor only runs on Unix based computers, this means that only Mac and Linux will be able to install it currently. (please see https://github.com/meteor/meteor/wiki/Supported-Platforms for a list of supported platforms)

###Running the website
Clone the git repository to your local computer then cd into the directory where you are storing the website.

####Installing Meteorite
Once you are in the directory you will need to install meteorite if you have not already. Meteorite can be installed using NPM. Below is a sample command to install meteorite.

```
$ npm install -g meteorite
```
####Your first startup
Once you have Meteorite installed you just need to run the 'mrt' command. What that command will do is pull down all of the packages that the website is using.

###Pushing to a live website
We currently use the free deployment system run by Meteor. An example of the command that we use can be found below.

```
meteor deploy lonepeakgoldrush.com
```

You can password protect your website so that people cannot push to it by using this command

```
meteor deploy lonepeakgoldrush.com --password
```

If you have not already set up a password it will ask you to set it, if you have set up a password then you will need to enter it so that you can change it.

###Other
If you have any other questions about the website or would like to hire me you can contact me at http://joshostler.com