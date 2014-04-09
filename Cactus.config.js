/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*
* Release version 1.0.0
*/

// RequireJS configuration.
require.config({
	baseUrl: 'js',
	paths: {
	    start: 'game/start',
	    playState: 'game/playState',
	    jaws: 'libs/jaws/jaws',
	    Cactus: 'cactusjs/Cactus',
	    Sprite: 'cactusjs/src/Plugin/Sprite/js/Sprite',
	    Text: 'cactusjs/src/Plugin/Text/js/Text',
	    Keyboard: 'cactusjs/src/Input/Keyboard/js/Keyboard'
	}
});