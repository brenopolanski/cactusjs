/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*
* Release version 1.0.0
*/

// Tests specifications.
define(['Cactus'], function(C) {
    describe('Cactus', function() {
		it('is object?', function() {
			expect(typeof C).toEqual('object');
		});
	});
});