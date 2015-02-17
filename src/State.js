/**
 * @author Joerg Basedow <jbasedow@web.de>
 */
(function(window) {
    var State = function(name, children) {
        var children = children || [];

        this.name = name;
        this.children = children;
    }

    State.prototype.getName = function() {
        return this.name;
    }

    State.prototype.addChild = function(child) {
        this.children.push(child);
    }

    State.prototype.getChildren = function() {
        return this.children;
    }

    window.State = State;
})(window);

