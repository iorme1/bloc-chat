(function() {
    function HomeCtrl(Room, $scope, $uibModal) {
      
      this.openChatRoom = function() {
          //do something to change room names

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
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();
