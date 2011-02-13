var iPhoneShake = function(){
    this.onShake = function(func, param){
        (function(){
            var last_shake = 0;
            window.ondevicemotion = function(e) {
                var x = e.accelerationIncludingGravity.x;
                if(x < 0) x *= -1;
                var y = e.accelerationIncludingGravity.y;
                if(y < 0) y *= -1;
                var z = e.accelerationIncludingGravity.z;
                if(z < 0) z *= -1;
                if(x > 18 || y > 18 || z > 18){
                    var time = ((new Date())/1000);
                    console.log("time:"+time+", last:"+last_shake);
                    if(last_shake + 2 < time){
                        last_shake = time;
                        func({x: e.accelerationIncludingGravity.x,
                              y: e.accelerationIncludingGravity.y,
                              z: e.accelerationIncludingGravity.z});
                    };
                };
            };
        })();
    };
    
    this.debug = function(func){
        window.ondevicemotion = function(e) {
            func({x: e.accelerationIncludingGravity.x,
                  y: e.accelerationIncludingGravity.y,
                  z: e.accelerationIncludingGravity.z});
        };
    };
};
