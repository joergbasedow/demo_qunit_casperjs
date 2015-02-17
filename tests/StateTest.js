/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
QUnit.module('State');

QUnit.test('childrenDefaultToEmptyArray', function(assert) {
    var state = new State('moo');

    assert.deepEqual(state.getChildren(), [], 'Children default to empty array');
});
