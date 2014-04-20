/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

// RequireJS configuration.
require.config({
	baseUrl: 'js',
	paths: {
	    start: 'game/start',
	    playState: 'game/playState',
	    jaws: 'libs/jaws/jaws',
	    Cactus: 'cactusjs/Cactus',
	    Keyboard: 'cactusjs/src/Input/Keyboard/js/Keyboard',
	    Parallax: 'cactusjs/src/Plugin/Parallax/js/Parallax',
	    Sprite: 'cactusjs/src/Plugin/Sprite/js/Sprite',
	    Text: 'cactusjs/src/Plugin/Text/js/Text'
	}
});
