define(['Cactus'], 
	function (C) {
		'use strict';
		
		var _sprite;

		function Sprite(color, x, y, width, height) {
			_sprite = new C.Sprite({
				color: color,
				x: x,
				y: y,
				width: width,
				height: height
			});

			return _sprite;
		}

		return Sprite;
	}
);