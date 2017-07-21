(function() {
    function ModalCtrl2($uibModalInstance, $cookies, Username) {

        this.closeModalSuccess = function() {
          Username.add(this.userName);
          $cookies.put('username', this.userName);
          $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl2', ['$uibModalInstance', '$cookies', 'Username', ModalCtrl2])
})();
