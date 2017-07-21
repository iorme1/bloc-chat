(function() {
    function ModalCtrl2($uibModalInstance, $cookies) {

        this.closeModalSuccess = function() {
          $cookies.put('username', this.userName);
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl2', ['$uibModalInstance', '$cookies', ModalCtrl2])
})();
