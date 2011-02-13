$(function(){
    var c = new JsConsole();
    c.start('ws://192.168.1.35:8088');

    var shake = new iPhoneShake();
    var max = 0;

    shake.onShake(function(acc){
        $('div#main').prepend(
            $('<p>').append('shake').css('font-size',Math.floor(Math.random()*200)+15)
        );
        var x = acc.accelerationIncludingGravity.x;
        if(x < 0) x *= -1
        var y = acc.accelerationIncludingGravity.y;
        if(y < 0) y *= -1;
        var z = acc.accelerationIncludingGravity.z;
        if(z < 0) z *= -1;
        if(max < x) max = x;
        if(max < y) max = y;
        if(max < z) max = z;
        c.log("max:"+max+", x:"+acc.x+", y:"+acc.y+" z:"+acc.z);
    });
    
});
