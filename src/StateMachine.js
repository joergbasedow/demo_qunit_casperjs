/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
(function(window) {
    var StateMachine = function(states, initialState) {
        this.currentState = initialState;
    }

    StateMachine.prototype.getCurrentState = function() {
        return this.currentState;
    }

    window.StateMachine = StateMachine;
})(window);

