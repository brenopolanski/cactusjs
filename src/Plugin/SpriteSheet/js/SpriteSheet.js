/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

/**
* Cut out individual frames (images) from a larger spritesheet image.
* @class SpriteSheet
*/
define(['Cactus'], function(C) {
    'use strict';

    /**
    * SpriteSheet constructor.
    * @constructor
    * @param {Image} image - Image/canvas or asset-string to cut up smaller images from.
    * @param {Array} frameSize - width and height of invidual frames in spritesheet.
    * @param {String} orientation - How to cut out invidual images from spritesheet, either 'right' or 'down'.
    * @param {Number} offset - Vertical or horizontal offset to start cutting from.
    * @param {Number} scale - Scale the sprite sheet by this factor before cutting out the frames. frame_size is automatically resized too.
    */
    function SpriteSheet(image, frameSize, orientation, offset, scale) {
        C.SpriteSheet.call(this, {
            image: image,
            frame_size: frameSize,
            orientation: orientation,
            offset: offset,
            scale: scale
        });
    }

    // Creates a new object with the specified prototype object and properties.
    SpriteSheet.prototype = Object.create(C.SpriteSheet.prototype);
    // Add the constructor of Cactus.SpriteSheet for Parallax.prototype.constructor.
    SpriteSheet.prototype.constructor = C.SpriteSheet;

    /**
    * Return all single frames cut out from image.
    *
    * @method getFrames
    * @param {Array} value - All single frames cut out from image.
    * @return
    */
    SpriteSheet.prototype.getFrames = function(value) {
        return this.frames[value];
    };

    return SpriteSheet;
});