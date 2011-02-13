// iphone-shake-event.js
// (c) 2011 Sho Hashimoto <hashimoto@shokai.org>
// https://github.com/shokai/js-iphone-shake-event

var iPhoneShake = function(){
    this.onShake = function(func, params){
        (function(){
            var last_shake = 0;
            var threshold = 18;
            if(params && params.threshold > 0) threshold = params.threshold;
            var interval = 2;
            if(params && params.interval > 0) interval = params.interval;
            window.ondevicemotion = function(e) {
                var x = e.accelerationIncludingGravity.x;
                if(x < 0) x *= -1;
                var y = e.accelerationIncludingGravity.y;
                if(y < 0) y *= -1;
                var z = e.accelerationIncludingGravity.z;
                if(z < 0) z *= -1;
                if(x > threshold || y > threshold || z > threshold){
                    var time = parseInt((new Date())/1000);
                    if(last_shake + interval < time){
                        last_shake = time;
                        func(e);
                    };
                };
            };
        })();
    };
};
