/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*
* Release version 1.0.0
*/

// Tests specifications.
define(['Text'], function(Text) {
    describe('Text', function() {
        var text;

        beforeEach(function() {
            text = new Text('Start', 100, 50);
        });

        describe('Compare text:', function() {
            it('text case sensitive', function() {
                expect(text.isCompareText('Start', true)).toEqual(true);
            });
            it('text case insensitive', function() {
                expect(text.isCompareText('Start', false)).toEqual(true);
            });
        });
    });
});