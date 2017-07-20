(function() {
    function Message($firebaseArray) {
      var Message = {};
      var refM = firebase.database().ref().child("messages");

      Message.all = $firebaseArray(refM);

      Message.add = function(message) {
          return messages.$add({
            content: message,
            username: 'Isaac',
            roomId: 'room1',
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
        .factory('Message', ['$firebaseArray', Message]);
})();
