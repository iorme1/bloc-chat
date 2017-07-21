(function() {
    function Message($firebaseArray, $cookies, Room) {
      var Message = {};
      var refM = firebase.database().ref().child("messages");

      Message.send = function(message) {
          return Message.all.$add({
            content: message,
            username: $cookies.get('username'),
            roomId: Room.activeRoom,
            sentAt: '12345'
          });
      };
      Message.setRoom = function(roomId) {
        var newRef = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(roomId);
        Message.all = $firebaseArray(newRef);
      };

      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
