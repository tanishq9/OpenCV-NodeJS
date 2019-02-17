$(function(){
    let output = $('#text');
    io.on('text',function(data){
        output.text(data);
        console.log(data);
    });
});