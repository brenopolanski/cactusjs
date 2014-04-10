/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

/**
* Manage a parallax scroller with different layers.
* @class Parallax
*/
define(['Cactus'], function(Cactus) {
    'use strict';

    /**
    * Parallax constructor.
    * @constructor
    * @param {Boolean} repeat_x - True or false repeat all parallax layers horizontally.
    * @param {Boolean} repeat_y - True or false repeat all parallax layers vertically.
    * @param {Number} scale - Scale factor for all layers (2 will double everything and so on).
    */
    function Parallax(repeat_x, repeat_y, scale) {
        Cactus.Parallax.call(this, {
            repeat_x: repeat_x,
            repeat_y: repeat_y,
            scale: scale
        });
    }

    // Creates a new object with the specified prototype object and properties.
    Parallax.prototype = Object.create(Cactus.Parallax.prototype);
    // Add the constructor of C.Text for Text.prototype.constructor.
    Parallax.prototype.constructor = Cactus.Parallax;

    /**
    * Add a new layer to the parallax scroller.
    *
    * @method addLayer
    * @param {String} image - Path image.
    * @param {Number} damping - Higher the number, the slower it will scroll with regards to other layers, defaults to 0.
    */
    Parallax.prototype.addLayers = function(image, damping) {
        this.addLayer({
            image: image,
            damping: damping
        });
    };

    /**
    * x-position of "camera".
    *
    * @method cameraX
    * @param {Number} value - Add to value scroll layers horizontally. Defaults to 0.
    */
    Parallax.prototype.cameraX = function(value) {
        this.camera_x += value;
    };

    /**
    * y-position of "camera".
    *
    * @method cameraY
    * @param {Number} value - Add to value scroll layers vertically. Defaults to 0.
    */
    Parallax.prototype.cameraY = function(value) {
        this.camera_y += value;
    };

    return Parallax;
});