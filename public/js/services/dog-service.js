"use strict";

function DogService($http) {

  const getDogs = () => {
    return $http({
      method: "GET",
      url:"/portal/dogs"
    });
  };

  const addDogs = (newDog) => {
    return $http({
      method: "POST",
      url:"/portal/dogs",
      data: newDog
    });
  };

  const deleteDogs = (dog_id) => {
    return $http({
      method: "DELETE",
      url: "/portal/dogs/" + dog_id
    });
  };

  const updateDogs = (dog) => {
    return $http({
      method: "PUT",
      url:"/portal/dogs/" + dog.dog_id,
      data: dog
    });
  };

  return {
    getDogs,
    addDogs,
    deleteDogs,
    updateDogs
  };

}



angular.module("app").factory("DogService", DogService);