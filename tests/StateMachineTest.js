/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
QUnit.test('isInitialStateSet', function(assert) {
    var initialState = 'moo';
    var sm = new StateMachine([], initialState);

    assert.equal(initialState, sm.getCurrentState(), 'Initial state properly set');
});
