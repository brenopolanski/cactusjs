/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

// Tests specifications.
define(['Sprite'], function(Sprite) {
	describe('One player', function() {
		var player;

		beforeEach(function() {
			player = new Sprite('blue', 20, 20, 20, 20);
		});

		describe('in its initial state', function() {
			it('must have the color blue', function() {
				expect(player.color).toBe('blue');
			});
		});
	});
});