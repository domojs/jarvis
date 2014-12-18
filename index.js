exports.init=function(config){
    global.chat=$('child_process').fork('./server.js', [], {cwd:'./modules/chat/', silent:true});
	chat.stdin.setEncoding('utf8');
	chat.stdout.setEncoding('utf8');
    chat.stdout.on('data', function(message){
        $.emit('message', message);
    });
    chat.on('message', function(message){
        $.emit('message', message);
    });
};
