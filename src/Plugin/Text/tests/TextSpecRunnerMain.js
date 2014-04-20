/**
* @author       Breno Polanski <breno.polanski@gmail.com>
* @copyright    2014 CactusJS, All Rights Reseverd.
* @license      {@link http://cactusjs.mit-license.org}
*/

// Tests specifications runner.
require(['jasmine'], function() {
    require(['jasmine_html'], function() {
        require(['TextSpec'], function() {
            var jasmineEnv = jasmine.getEnv();
            jasmineEnv.updateInterval = 1000;

            var htmlReporter = new jasmine.HtmlReporter();

            jasmineEnv.addReporter(htmlReporter);

            jasmineEnv.specFilter = function(spec) {
                return htmlReporter.specFilter(spec);
            };

            jasmineEnv.execute();
        });
    });
});