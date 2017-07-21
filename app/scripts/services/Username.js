(function() {
    function Username($firebaseArray, Username) {
      var Username = {};
      var refU = firebase.database().ref().child("usernames");
      var usernames = $firebaseArray(refU);

      Username.all = usernames;

      Username.add = function(username) {
          return usernames.$add(username)
      };

      return Username;
    }

    angular
        .module('blocChat')
        .factory('Username', ['$firebaseArray', Username]);

})();
