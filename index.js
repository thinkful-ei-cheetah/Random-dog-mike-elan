'use strict';
/* global $ */
// we need to target the user input on the form on submit
// Get User Input
// we need to store/parse this input into a number variable
$(document).ready(function() {
  const userNumber = {
    number: 3
  };
  
  function getUserInput() {
    $('.js-input-form').submit(function(event) {
      event.preventDefault();
      const num = $('.num-input').val();
      if (num > 50 || num < 0) {
        throw new Error('Please enter a number between 1-50.');
      } else {
        userNumber.number = num;
        console.log(userNumber.number);
        returnRandomDogJSON(userNumber.number);
      }
    });
  }

  // we need to fetch at the display random image api https://dog.ceo/api/breeds/image/random 

  function returnRandomDogJSON(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber.number}`)
      .then(response => response.json())
      .then(responseJson => generateDogImages(responseJson))
      .catch(error => alert('Something went wrong. Please try again'));
  }

  function generateDogImages(responseJson) {
    // access responseJson.message 
    for (let i = 0; i < responseJson.message.length; i++) {
      $('.container').append(
        `<img src="${responseJson.message[i]}" class = "results-img">`
      );
    }
  }

  getUserInput();


  // return the json objects to the console



});