var fork = require('child_process').fork;

var sub = fork('./test.js');
setInterval(function() {
	sub.send({test: 'abc'});
}, 1000);
sub.on('create', function(win, ren) {
	console.log(win)
});
sub.on('exit', function (argument) {
	console.log('exit')
})