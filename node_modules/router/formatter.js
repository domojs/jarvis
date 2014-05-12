var param = function(val) {
	return function(map) {
		return map[val] || '';
	};
};
var str = function(val) {
	return function() {
		return val;
	};
};

module.exports = function (format)
{
    if (!format) return null;

    format = format.replace(/\{\*\}/g, '*').replace(/\*/g, '{*}').replace(/:(\w+)/g, '{$1}'); // normalize
    format = format.match(/(?:[^\{]+)|(?:{[^\}]+\}\??)/g).map(function (item)
    {
        if (item[0] !== '{')
            return str(item);
        if(item[item.length-1]!=='}')
                return param(item.substring(1, item.length - 2));
        return param(item.substring(1, item.length - 1));
    });

    return function (params)
    {
        return format.reduce(function (result, item)
        {
            return result + item(params);
        }, '').replace(/\/+/g, '/').replace(/\/$/, '');
    };
};
