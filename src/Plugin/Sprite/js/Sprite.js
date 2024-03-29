/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

/**
* A basic but powerfull sprite for all your onscreen-game objects.
* It is used to make most visual elements in a game, such as the player, enemies, projectiles and explosions.
* @class Sprite
*/
define(['Cactus'], function(C) {
    'use strict';

    /**
    * Sprite constructor.
    * @constructor
    * @param {Image} image - Image/canvas or string pointing to an asset ('player.png').
    * @param {String} color - Color If set, draws a rectangle of dimensions rect() with specified color or gradient (linear or radial).
    * @param {Number} x - Horizontal position (0 = furthest left).
    * @param {Number} y - Vertical position (0 = top).
    */
    function Sprite(image, color, x, y) {
        C.Sprite.call(this, {
            image: image,
            color: color,
            x: x,
            y: y
        });
    }

    // Creates a new object with the specified prototype object and properties.
    Sprite.prototype = Object.create(C.Sprite.prototype);
    // Add the constructor of Cactus.Parallax for Parallax.prototype.constructor.
    Sprite.prototype.constructor = Sprite;

    /**
    * Color if set, draws a rectangle of dimensions rect() with specified color or gradient (linear or radial).
    *
    * @method setColor
    * @param {String} color - Color of rectangle.
    * @example 
    * For example: name color (blue, red, green), hexadecimal (#ff0000), rgb(39, 174, 96) and rgba(39, 174, 96,1.0).
    */
    Sprite.prototype.setColor = function(color) {
        this.color = color;
    };

    /**
    * Determines width and height of rectangle.
    *
    * @method setRectSize
    * @param {Number} width - Width of rectangle.
    * @param {Number} height - Height of rectangle.
    */
    Sprite.prototype.setRectSize = function(width, height) {
        this.width = width;
        this.height = height;
    };

    /**
    * Set transparency sprite: true (fully transparent) or false (no transparency).
    *
    * @method setVisible
    * @param {Boolean} isAlpha - True or false sprite visible.
    */
    Sprite.prototype.setVisible = function(isAlpha) {
        if (isAlpha) {
            this.alpha = 1;
        }
        else {
            this.alpha = 0;
        }
    };

    /**
    * Determines angle in degrees (0-360).
    *
    * @method setAngle
    * @param {Number} angle - Angle in degrees (0-360).
    */
    Sprite.prototype.setAngle = function(angle) {
        this.angle = angle;
    };

    return Sprite;
});
