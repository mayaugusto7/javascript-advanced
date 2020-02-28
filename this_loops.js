'use strict';
var object = {
    name: 'Maycon',
    friends: ['João', 'Ana'],
    loop: function() {
        var self = this;
        this.friends.forEach(function(friend) {
            console.log(self.name + ' kwons ' + friend);
        });
    }
}

object.loop();