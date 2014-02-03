define(['../../../../Cactus'], 
	function (C) {
		'use strict';

		var keyPressed = function (key) {
			key = Array.prototype.slice.call(arguments);
			return C.pressed(key[0].toString());
		};

		return {
			keyPressed: keyPressed
		}
	}
);