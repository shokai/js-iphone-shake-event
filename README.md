JavaScript iPhone Shake Event
=============================

catch "shake" event on Safari. 

[sample](http://dev.shokai.org/js/iphone-shake/)


Dependencies
============

* iOS 4.2+
* Safari
* JavaScript


Use
===

load iphone-shake-event.js

    <script src='iphone-shake-event.js' type='text/javascript' />


onShake

    var shake = new iPhoneShake();
    shake.onShake(function(){
      alert('shake');
    });


Parameters
==========

    var params = {interval: 3.5,
                  threshold: 12};
    shake.onShake(function(){
      alert('shake');
    }, params);


* interval : default is 2.0(sec)
* threshold : default is 18. max is 20.04066558085978.


LICENSE:
========

(The MIT License)

Copyright (c) 2011 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
