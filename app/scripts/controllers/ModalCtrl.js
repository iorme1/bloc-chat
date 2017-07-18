(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.closeModalSuccess = function() {
            Room.add(this.roomName);
            $uibModalInstance.close();
        }
        this.closeModalCancel = function() {
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl])
})();
