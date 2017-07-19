(function() {
    function HomeCtrl(Room, Message, $scope, $uibModal) {

      this.openChatRoom = function(roomValue) {
          this.roomId = roomValue;
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
        .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();
