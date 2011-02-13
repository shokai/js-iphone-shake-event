$(function(){
    var c = new JsConsole();
    c.start('ws://192.168.1.35:8088');

    var shake = new iPhoneShake();
    var max = 0;

    shake.onShake(function(acc){
        $('div#main').prepend(
            $('<p>').append('shake')
        );
        var x = acc.x;
        if(x < 0) x *= -1
        var y = acc.y;
        if(y < 0) y *= -1;
        var z = acc.z;
        if(z < 0) z *= -1;
        if(max < x) max = x;
        if(max < y) max = y;
        if(max < z) max = z;
        c.log("max:"+max+", x:"+acc.x+", y:"+acc.y+" z:"+acc.z);
    });
    
    /*
    shake.debug(function(acc){
    });
    */
});
