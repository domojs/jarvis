
/* test */
$.language({
    actions:{'up':['ouvre','lève', 'ouvrir', 'lever'], 'down':['baisse', 'ferme', 'baisser', 'fermer']},
    keywords:{'shutters':['volets','volet']},
	others:{'4':['', 'devant'], '3':['chambre'], '0':['salon']},
    process:function(cmd,callback,next)
    {
		if(cmd.target!=='shutters')
			return false;
			
		switch(cmd.action)
		{
			case 'up':
				callback(null, 'ouverture des volets (canal '+cmd.other+')');
				break;
			case 'down':
				callback(null, 'fermeture des volets (canal '+cmd.other+')');
				break;
		}
		return next();
    }
});