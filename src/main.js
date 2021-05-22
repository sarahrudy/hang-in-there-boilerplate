// query selector variables go here 👇
// move query selector variables here before submitting
// when a user inputs its info, you should be able to save it in this array
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
//window.onload = newPoster
var posterImage = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var randomImgBtn = document.querySelector(".show-random");
var formPage = document.querySelector(".poster-form");
var showFormBtn = document.querySelector(".show-form");
var mainPage = document.querySelector(".main-poster");
var goBackBtn = document.querySelector(".show-main");
var showSavedBtn = document.querySelector(".show-saved");
var showSaved = document.querySelector(".saved-posters");
var backToMainBtn = document.querySelector(".back-to-main");
var showMyPosterBtn = document.querySelector(".make-poster");
var posterImgInput = document.getElementById("poster-image-url");
var posterTitleInput = document.getElementById("poster-title");
var posterQuoteInput = document.getElementById("poster-quote");

randomImgBtn.addEventListener("click", newPoster);
showFormBtn.addEventListener("click", showForm);
goBackBtn.addEventListener("click", goBackToHomePage);
// could possibly use hideShowMainPage in place of showForm and goBackToHomePage
showSavedBtn.addEventListener("click", showSavedPosters);
backToMainBtn.addEventListener("click", hideShowMainPage);
showMyPosterBtn.addEventListener("click", showMyPoster);


// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newPoster() {
  posterImage.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
}

function hideShowMainPage() {
  showSaved.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
}

function showForm() {
  event.preventDefault();
  hide(formPage, true);
  hide(mainPage, false);
}

function showSavedPosters() {
  hide(showSaved, true);
  hide(mainPage, false);
}

function goBackToHomePage() {
  hide(formPage, false);
  hide(mainPage, true);
}
// checking if element has a hidden class, you want to remove it, if it doesn't, you want to add it
function hide(element, hidden) {
    if (hidden) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }
