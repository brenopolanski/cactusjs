/**
* The Keyboard object allows projects to respond to keyboard input.
* @class Keyboard
*/
define(['Cactus'], function(C) {
		'use strict';

        /**
        * Check if array keys are pressed.
        * 
        * @method arrayKeysPressed
        * @param {Array} keys Array of key Codes letters or words
        * @return {Boolean} True if keys pressed
        */
        var arrayKeysPressed = function(keys) {
            keys = keys.join(' ');
            return C.pressed(keys.toString());
		},

        /**
        * Check if key are pressed.
        * 
        * @method keyPressed
        * @param {String} key Key Codes letters or words
        * @return {Boolean} True if key pressed
        */
	    keyPressed = function(key) {
			key = Array.prototype.slice.call(arguments);
			return C.pressed(key[0].toString());
	    },

        /**
        * Check if key are pressed without repeat.
        * 
        * @method keyPressedWithoutRepeat
        * @param {String} key Key Codes letters or words
        * @return {Boolean} True if key pressed
        */
	    keyPressedWithoutRepeat = function(key) {
	        key = Array.prototype.slice.call(arguments);
	        return C.pressedWithoutRepeat(key[0].toString());
	    },

        /**
        * Sets up a callback when a key (or array of keys) to call when it's released.
        * 
        * @method onKeyUp
        * @param {String or Array} key Key Codes letters or words
        * @param {Function} callback Function that is returned
        * @return {Function} Start function
        */
        onKeyUp = function(key, callback) {
			return C.on_keyup(key, callback);
		},

        /**
        * Sets up a callback for a key (or array of keys) to call when it's pressed down.
        * 
        * @method onKeyDown
        * @param {String or Array} key Key Codes letters or words
        * @param {Function} callback Function that is returned
        * @return {Function} Start function
        */
		onKeyDown = function(key, callback) {
			return C.on_keydown(key, callback);
		};		

        return {
            arrayKeysPressed: arrayKeysPressed,
		    keyPressed: keyPressed,
		    keyPressedWithoutRepeat: keyPressedWithoutRepeat,
		    onKeyUp: onKeyUp,
		    onKeyDown: onKeyDown
		};
	}
);
