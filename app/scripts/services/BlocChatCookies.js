(function() {
    function  BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('username');
        console.log(currentUser);

        if (!currentUser || currentUser === ''){
            $uibModal.open({
              controller: 'ModalCtrl2',
              controllerAs: 'modal2',
              templateUrl: '/templates/modal2.html'
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
