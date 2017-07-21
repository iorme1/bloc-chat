(function() {
    function HomeCtrl(Room, Message, $scope, $uibModal) {

      this.messages = Message;
      this.openChatRoom = function(roomValue, roomId) {
          Message.setRoom(roomId);
          this.roomName = roomValue; // sets room name
      };
      this.chatRooms = Room;
      this.openModal = function() {
          $uibModal.open({
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              templateUrl: '/templates/modal.html'
          });
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'Username', '$scope', '$uibModal', HomeCtrl]);
})();
