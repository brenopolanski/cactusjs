define(['Cactus'],
    function (C) {
        'use strict';

        // your Sprite constructor
        function Sprite(color, x, y, width, height) {
            // call super
            C.Sprite.call(this, {
                color: color,
                x: x,
                y: y,
                width: width,
                height: height
            });
        }

        // makes your Sprite inherits from Jaws's Sprite
        Sprite.prototype = Object.create(C.Sprite.prototype);
        Sprite.prototype.constructor = C.Sprite;

        // exports
        return Sprite;
    }
);
