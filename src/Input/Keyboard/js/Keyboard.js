define(['Cactus'], 
	function (C) {
		'use strict';

		var keyPressed = function (key) {
			key = Array.prototype.slice.call(arguments);
			return C.pressed(key[0].toString());
		},

		onKeyUp = function (key, callback) {
			return C.on_keyup(key, callback);
		},

		onKeyDown = function (key, callback) {
			return C.on_keydown(key, callback);
		};		

		return {
		    keyPressed: keyPressed,
		    onKeyUp: onKeyUp,
		    onKeyDown: onKeyDown
		};
	}
);