window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
    var current_user = window.user;
    return {
      current_user: function() {
        return current_user;
      },
      isSignedIn: function() {
        return !!current_user;
      }
    }
  });