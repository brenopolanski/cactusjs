/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*
* Release version 1.0.0
*/

/**
* The Text object can display text using a font in your game.
* @class Text
*/
define(['Cactus'], function(C) {
    'use strict';

    /**
    * Text constructor.
    * @constructor
    * @param {String} text - The actual text to be displayed.
    * @param {Number} x - Horizontal position (0 = left).
    * @param {Number} y - Vertical position (0 = top).
    */
    function Text(text, x, y) {
        C.Text.call(this, {
            text: text,
            x: x,
            y: y
        });
    }

    // Creates a new object with the specified prototype object and properties.
    Text.prototype = Object.create(C.Text.prototype);
    // Add the constructor of C.Text for Text.prototype.constructor.
    Text.prototype.constructor = C.Text;

    /**
    * Determines whether two values are the same value.
    *
    * @private
    * @param {String} text - The actual text to be displayed.
    * @param {String} textToCompare - The text for compare.
    * @return {Boolean} True if texts equals.
    */
    var _isEqualsNoCase = function(text, textToCompare) {
        return text.toLowerCase() === textToCompare.toLowerCase();
    };

    /**
    * Determines style of a text, size and font family.
    *
    * @method setFont
    * @param {String} fontStyle - The style to draw the text: 'normal', 'bold' or 'italic'.
    * @param {Number} fontSize - The size of the text in pixels.
    * @param {String} fontFamily - A valid font-family.
    */
    Text.prototype.setFont = function(fontStyle, fontSize, fontFamily) {
        this.style = fontStyle;
        this.fontSize = fontSize;
        this.fontFace = fontFamily;
    };

    /**
    * Test whether the text object is currently displaying a certain string of text.
    *
    * The comparison can be either case sensitive ('TEXT' is different to 'text')
    * or case insensitive ('Text' is considered the same as 'text').
    *
    * @method isCompareText
    * @param {String} textToCompare - The text for compare.
    * @param {Boolean} isCase - True or false text case.
    * @return {Boolean} True if text equals.
    */
    Text.prototype.isCompareText = function(textToCompare, isCase) {
        if (isCase) {
            return this.text === textToCompare;
        }
        else {
            return _isEqualsNoCase(this.text, textToCompare);
        }
    };

    /**
    * Set transparency text: true (fully transparent) or false (no transparency).
    *
    * @method setVisible
    * @param {Boolean} bool - True or false text visible.
    */
    Text.prototype.setVisible = function(isAlpha) {
        if (isAlpha) {
            this.alpha = 1;
        }
        else {
            this.alpha = 0;
        }
    };

    /**
    * Add some text to the end of the current text.
    *
    * @method appendText
    * @param {String} text - Text to the end of the current text.
    */
    Text.prototype.appendText = function(text) {
        this.text += text;
    };

    /**
    * Set the text the object is currently displaying.
    *
    * @method setText
    * @param {String} text - Text the object is currently displaying.
    */
    Text.prototype.setText = function(text) {
        this.text = text;
    };

    /**
    * Set the color of the text.
    *
    * @method setTextColor
    * @param {String} color - Color of text.
    * @example 
    * For example: name color (blue, red, green), hexadecimal (#ff0000), rgb(39, 174, 96) and rgba(39, 174, 96,1.0).
    */
    Text.prototype.setTextColor = function(color) {
        this.color = color;
    };

    /**
    * Set shadow property.
    *
    * @method setTextShadow
    * @param {String} shadowColor - The color of the shadow for the text.
    * @param {Number} shadowBlur - The amount of shadow blur (length away from text).
    * @param {Number} shadowOffsetX - The start of the shadow from initial x.
    * @param {Number} shadowOffsetY - The start of the shadow from initial y.
    */
    Text.prototype.setTextShadow = function(shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY) {
        this.shadowColor = shadowColor;
        this.shadowBlur = shadowBlur;
        this.shadowOffsetX = shadowOffsetX;
        this.shadowOffsetY = shadowOffsetY;
    };

    /**
    * Wraps at the end of a line. 
    * Word will wrap entire words separated by spaces or hyphens.
    *
    * @method setWordWrap
    * @param {Boolean} bool - True or false wrapping.
    */
    Text.prototype.setWordWrap = function(bool) {
        this.wordWrap = bool;
    };

    /**
    * Set the text align.
    *
    * @method setTextAlign
    * @param {String} align - Text align 'start', 'end', 'left', 'right' or 'center'.
    */
    Text.prototype.setTextAlign = function(align) {
        this.textAlign = align;
    };

    /**
    * Set the text baseline.
    *
    * @method setTextBaseline
    * @param {String} baseline - Text baseline 'top', 'bottom', 'hanging', 'middle', 'alphabetic' or 'ideographic'.
    */
    Text.prototype.setTextBaseline = function(baseline) {
        this.textBaseline = baseline;
    };

    return Text;
});