(function() {
    function Message($firebaseArray) {
      var Message = {};
      var refM = firebase.database().ref().child("messages");
      var messages = $firebaseArray(refM);

      Message.all = messages;

      Message.add = function(message) {
          return messages.content.$add(message);
      };

      Message.getByRoomId = function(roomId) {
          refM.orderByChild(roomId).equalTo('roomId');
      };

      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
