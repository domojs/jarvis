process.env.NODE_ENV='dev'
process.env.DEBUG=''

require('sugar');
require('sugar/lib/locales/fr');
Date.setLocale('fr');
require('jnode');
var colors=require('colors');
var writer=function(text)
{
	if(typeof(text)=='string')
		return colors.green('Crokmou > '+text);
	return colors.red('Crokmou > '+$('util').inspect(text));
}
var repl=require('repl');
var eval=require('repl-middleware');
process.stdin.setEncoding('utf8');
global.eval=eval;
repl.start({'prompt':'Moi > ',useColors:true,input:process.stdin, output:process.stdout, eval:eval, writer:writer});