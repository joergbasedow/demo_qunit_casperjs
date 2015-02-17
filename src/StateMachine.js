/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
(function(window) {
    var findStateByName = function (states, name) {
        for (var i = 0; i < states.length; i++) {
            if (states[i].getName() == name) {
                return states[i];
            }
        }

        return null;
    }

    var StateMachine = function(states, initialState) {
        this.states = states;
        this.currentState = initialState;
    }

    StateMachine.prototype.getCurrentState = function() {
        return this.currentState;
    }

    StateMachine.prototype.setState = function(name) {
        var currentStateObject = findStateByName(this.states, this.currentState);

        if (currentStateObject.getChildren().indexOf(name) === -1) {
            throw {type: 'IllegalStateChange'};
        }

        this.currentState = name;
    }

    window.StateMachine = StateMachine;
})(window);

