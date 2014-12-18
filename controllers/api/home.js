module.exports={
	ask:function(q, callback)
	{
		chat.send(q);
		chat.once('message', function(a){
            console.log(arguments);
			callback(a);
		});
		return;
		socket=$('net').connect(5001, function(){
			socket.setEncoding('utf8');
		});
		socket.on('data', function(data){
			if(data=='>')
			{
				console.log(data+q);
				socket.write(q);
				return;
			}
			console.log(data+q);
			callback(data);
			socket.end();
		})
		.on('error', function(err){
			console.log(err);
			callback(500);
		});
	}
};
