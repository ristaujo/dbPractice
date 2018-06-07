"use strict";

const owners = {
  template: `
    <section ng-repeat="owner in $ctrl.owners" class="owners">
      <input ng-blur="$ctrl.updateOwners(owner);" ng-model="owner.owner_name" class="owner_name">
      <input ng-blur="$ctrl.updateOwners(owner);" ng-model="owner.owner_address" <class="owner_info">
      <input ng-blur="$ctrl.updateOwners(owner);" ng-model="owner.owner_age" class="owner_info">
      <input ng-blur="$ctrl.updateOwners(owner);" ng-model="owner.dog_name" class="owner_info">
      <a href="" ng-click="$ctrl.deleteOwners(owner.owner_id);" class="delete-owner">Delete</a>
    </section>
    
    <form ng-submit="$ctrl.addOwners($ctrl.newOwner);">
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
      vm.owners = response.data;
    });

    vm.addOwners = (newOwner) => {
      OwnerService.addOwners(newOwner).then((response) => {
        vm.owners = response.data;
      });

    vm.deleteOwners = (owner_id) => {
      OwnerService.deleteOwners(owner_id).then((response) => {
        vm.owners = response.data;
      });
    };
    
    vm.updateOwners = (owner) => {
      OwnerService.updateOwners(owner).then((response) => {
        vm.owners = response.data;
      });
    };
   
    }
  }]
};

angular
  .module("app")
  .component("owners", owners);