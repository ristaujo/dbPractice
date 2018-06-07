"use strict";

angular
  .module("app")
  .config(($routeProvider) => {
    $routeProvider
      .when("/dogs", {
        template: `<dogs></dogs>`
      })
      .when("/owners", {
        template: `<owners></owners>`
      })
      .when("/matches", {
        template: `<matches></matches>`
      })
  });