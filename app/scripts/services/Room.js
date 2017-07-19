(function() {
    function Room($firebaseArray) {
        var Room = {};
        var refR = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(refR);

        Room.all = rooms;

        // function for adding rooms, takes room object as an argument
        Room.add = function(room) {
          return rooms.$add(room);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
