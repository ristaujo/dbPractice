"use strict";

function OwnerService($http) {

  const getOwners = () => {
    return $http({
      method: "GET",
      url:"/portal/owners"
    });
  };

  const addOwners = (newOwner) => {
    return $http({
      method: "POST",
      url:"/portal/owners",
      data: newOwner
    });
  };

  const deleteOwners = (owner_id) => {
    return $http({
      method: "DELETE",
      url: "/portal/owners/" + owner_id
    });
  };

  const updateOwners = (owner) => {
    return $http({
      method: "PUT",
      url:"/portal/owners/" + owner.owner_id,
      data: owner
    });
  };

  return {
    getOwners,
    addOwners,
    deleteOwners,
    updateOwners
  };

}

angular.module("app").factory("OwnerService", OwnerService);