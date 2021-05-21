// query selector variables go here 👇
// adds communications from javascript to the dom

//returns first element in document that matches the specified selector. If no matches are found, null is returned.

// when a user inputs its info, you should be able to save it in this array
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
// There are no global variables aside from query selectors, currentPoster, images, titles, quotes, and savedPosters.
window.onload = newPoster
var posterImage = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var randomImgBtn = document.querySelector(".show-random");
var form = document.querySelector(".poster-form");
var showFormBtn = document.querySelector(".show-form");
var mainPage = document.querySelector(".main-poster");

randomImgBtn.addEventListener("click", newPoster);
// get form to open
showFormBtn.addEventListener("click", showFormBtn);

// create an event listener for "Make Your Own Poster" button that brings us to a page where we can input
// values for image, quote, and title we choose


// when user clicks "View Saved Posters" button, we will see the saved posters area, and the main
// poster should be hidden

// when a user clicks the "Nevermind, take me back!" or "Back to Main" buttons, we should only see the
// main poster section

// overall goal is to be able to switch between the three views (main poster, form, and saved poster)
// on the correct button clicks


// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function newPoster() {
  posterImage.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
}

function showFormBtn () {
  form.classList.remove("hidden");
  mainPage.classList.add("hidden");
  window.open(form)
}


// event.preventDefault() {
// (we've provided one for you to get you started)!
// declare a function to get a random index with a parameter array
//function getRandomIndex(array) {
  // Math.floor makes sure it rounds down to nearest whole integer
  // takes an argument of a random number which is equal to array.length which makes sure it's not returning a number that's outside the number of elements in array
//  return Math.floor(Math.random() * array.length);
