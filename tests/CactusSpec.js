/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

// Tests specifications.
define(['Cactus'], function(C) {
    describe('Cactus', function() {
		it('is object?', function() {
			expect(typeof C).toEqual('object');
		});
	});
});