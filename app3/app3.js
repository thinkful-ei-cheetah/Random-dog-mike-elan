'use strict';
/* global $ */
// we need to target the user input on the form on submit
// Get User Input
// we need to store/parse this input into a number variable
$(document).ready(function() {
  const userBreed = {
    breed: ''
  };
  
  function getUserInput() {
    $('.js-input-form').submit(function(event) {
      event.preventDefault();
      const breed = $('.text-input').val();
      userBreed.breed = breed;
      console.log(breed);
      returnRandomDogJSON(userBreed);
    });
  }

  // we need to fetch at the display random image api https://dog.ceo/api/breeds/image/random 

  function returnRandomDogJSON(breed) {
    fetch(`https://dog.ceo/api/breed/${userBreed.breed}/images/random`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(alert('Your breed has returned no results. Please try again with a different breed.'));
      })
      .then(responseJson => {
        $('.results-img').replaceWith(
          `<img src="${responseJson.message}" class = "results-img">`
        );
      });
  }

  getUserInput();
});