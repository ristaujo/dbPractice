"use strict";


const dogs = {
  template: `
    <section ng-repeat="dog in $ctrl.dogs" class="dogs">
      <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_name" class="dog_name">
      <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_age" <class="dog_info">
      <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_breed" class="dog_info">
      <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_colors" class="dog_info">
      <a href="" ng-click="$ctrl.deleteDogs(dog.dog);" class="delete-dog">Delete</a>
    </section>
    
    <form ng-submit="$ctrl.addDogs($ctrl.newOwner);">
      <h5>New Dog Owner!</h5>
      <input type="text" placeholder="Name" ng-model="$ctrl.newOwner.owner_name">
      <input type="text" placeholder="Your Address" ng-model="$ctrl.newOwner.owner_address">
      <input type="text" placeholder="Your Age" ng-model="$ctrl.newOwner.owner_age">
      <input type="text" placeholder="Your Dog's Name" ng-model="$ctrl.newOwner.dog_name">
      <button>Join the Pack</button>
    </form>
    
  `,
  controller:  ["OwnerService", function(OwnerService) {
    const vm = this;

    OwnerService.getOwners().then((response) => {
      console.log(response);
      vm.dogs = response.data;
    });

    vm.addDogs = (newOwner) => {
      OwnerService.addDogs(newOwner).then((response) => {
        vm.dogs = response.data;
      });

    vm.deleteOwners = (owner_id) => {
      OwnerService.deleteOwners(owner_id).then((response) => {
        vm.dogs = response.data;
      });
    };
    
    vm.updateOwners = (owner) => {
      OwnerService.updateOwners(owner).then((response) => {
        vm.dogs = response.data;
      });
    };
   
    }
  }]
};

angular
  .module("app")
  .component("dogs", dogs);