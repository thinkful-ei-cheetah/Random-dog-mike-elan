'use strict';
/* global $ */
// we need to target the user input on the form on submit
// Get User Input
// we need to store/parse this input into a number variable
$(document).ready(function() {
  const userNumber = {
    number: 0
  };
  
  function getUserInput() {
    $('.js-input-form').submit(function(event) {
      event.preventDefault();
      const num = $('.num-input').val();
      userNumber.number = num;
      console.log(userNumber.number);
      returnRandomDogJSON(userNumber.number);
    });
  }

  // we need to fetch at the display random image api https://dog.ceo/api/breeds/image/random 

  function returnRandomDogJSON(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber.number}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => alert('Something went wrong. Please try again'));
  }

  getUserInput();


  // return the json objects to the console



});