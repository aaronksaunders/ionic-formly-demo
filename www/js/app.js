// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'formlyIonic'])

.controller("MainController", function($scope) {

    // ONLY SUBMIT IF I HAVE VALID DATA
    $scope.doSubmit = function() {
      alert(JSON.stringify($scope.formData,null,2));
    }


    $scope.formData = {};
    $scope.formFields = [
      {
        "type": "input",
        "key": "name",
        "templateOptions": {
          "type": "text",
          "placeholder": "Aaron Saunders",
          "icon": "ion-person",
          required : true,
          "iconPlaceholder": true
        }
      },
      {
      "type": "input",
      "key": "email",
      "templateOptions": {
        "type": "email",
        "placeholder": "jane.doe@apple.com",
        "icon": "ion-email",
        required : true,
        "iconPlaceholder": true
      }
    }]
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
