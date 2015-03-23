module.exports={
	ask:function(q, callback)
	{
		chat.send(q);
		chat.once('message', function(a){
            console.log(arguments);
			callback(a);
		});
	},
	rules:function(callback)
	{
        chat.send('rules');
		chat.once('message', function(a){
            console.log(arguments);
			callback(a.rules);
		});

	},
	lessons:function(callback)
	{
        callback(Object.keys($('./modules/chat/lessons.json')));
	}
};
