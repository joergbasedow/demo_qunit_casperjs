/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
QUnit.module('StateMachine', {
    setup: function() {
        var states = [
            new State('new', ['pending', 'disabled']),
            new State('pending', ['approved', 'disabled']),
            new State('approved', ['disabled']),
            new State('disabled', ['new']),
        ]

        this.initialState = 'new';
        this.sm = new StateMachine(states, this.initialState);
    }
});

QUnit.test('isInitialStateSet', function(assert) {
    assert.equal(this.sm.getCurrentState(), this.initialState, 'Initial state properly set');
});

QUnit.test('legalStateChangeWorks', function(assert) {
    assert.equal(this.sm.getCurrentState(), 'new', 'Given the curent state is "new"');

    this.sm.setState('pending');

    assert.equal(this.sm.getCurrentState(), 'pending', 'Then changing the state to "pending" works');
});

QUnit.test('illegalStateChangeRaisesError', function(assert) {
    assert.equal(this.sm.getCurrentState(), 'new', 'Given the curent state is "new"');

    try {
        this.sm.setState('approved');

        this.ok(false, 'Expected error was  not raised');
    } catch (e) {
        assert.equal(e.type, 'IllegalStateChange', 'Then setting the state "approved" is raising an error');
    }
});
