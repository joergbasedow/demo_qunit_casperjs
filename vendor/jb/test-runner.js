/**
 * Runs QUnit tests via casperjs
 *
 * @author Joerg Basedow <jbasedow@web.de>
 */
var casper = require('casper').create({
    verbose: true
});

var testPage = casper.cli.args[0];
var xUnitFile = casper.cli.args[1];
if (casper.cli.options['no-colors']) {
    casper.options.colorizerType = 'Dummy';
    casper.colorizer = casper.getColorizer();
}

if (!testPage) {
    casper.echo('Usage: casperjs test-runner.js [QUnit html] [XUnit XML target file (optional)] [--no-colors]', 'ERROR');
    casper.exit(1);
}

casper.echo('Using test page "' + testPage + '".', 'INFO');

casper.start(testPage);
casper.waitForSelector('#qunit-testresult');

// iterating over all tests on the page and assert that they are passing.
casper.then(function () {
    var testElements = this.evaluate(function() {
        var results = [];
        $('#qunit-tests>li').each(function(i, e) {
            results.push({
                name: $('.module-name', e).text() + ': ' + $('.test-name', e).text(),
                result: e.className
            });
        });
        return results;
    });
    for (var i = 0; i < testElements.length; i++) {
        this.test.assertEqual('pass', testElements[i].result, testElements[i].name);
    }
});

casper.run(function () {
    var exitStatus = this.test.getFailures().length ? 1 : 0;
    this.test.renderResults(true, exitStatus, xUnitFile);
});
