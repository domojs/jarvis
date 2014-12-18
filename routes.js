route.on('chat', function(url, params, unchanged){
    $.ajax(loadHtml('/chat')); 
});