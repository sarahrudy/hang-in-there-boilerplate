// query selector variables go here 👇

window.onload = newPoster;
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
var saveMyPosterBtn = document.querySelector(".save-poster");
var savedPostersGrid = document.querySelector(".saved-posters-grid");

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

randomImgBtn.addEventListener("click", newPoster);
showFormBtn.addEventListener("click", showForm);
goBackBtn.addEventListener("click", goBackToHomePage);
showSavedBtn.addEventListener("click", showSavedPosters);
backToMainBtn.addEventListener("click", hideShowMainPage);
showMyPosterBtn.addEventListener("click", showMyPoster);
saveMyPosterBtn.addEventListener("click", saveMyPoster);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function posterInstance () {
  currentPoster = new Poster (
  posterImgInput.value,
  posterTitleInput.value,
  posterQuoteInput.value,
  )
}

function newPoster() {
  posterImage.src = images[getRandomIndex(images)],
  posterTitle.innerText = titles[getRandomIndex(titles)],
  posterQuote.innerText = quotes[getRandomIndex(quotes)]
  currentPoster = new Poster(posterImage.src, posterTitle.innerText, posterQuote.innerText)
}

function hideShowMainPage() {
  showSaved.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
}

function showForm() {
  event.preventDefault();
  hide(formPage, true);
  hide(mainPage, false);
  document.querySelector("form").reset();
}

function showSavedPosters() {
  var savedHTML = "";
  hide(showSaved, true);
  hide(mainPage, false);
  for (var i = 0; i < savedPosters.length; i++) {
    savedHTML += `<article class = "mini-poster">
    <img src = ${savedPosters[i].imageURL} />
    <h2> ${savedPosters[i].title} </h2>
    <h4> ${savedPosters[i].quote} </h4>
    </article>`;
  }
  savedPostersGrid.innerHTML = savedHTML;
}

function goBackToHomePage() {
  hide(formPage, false);
  hide(mainPage, true);
}

function hide(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

function showMyPoster() {
  event.preventDefault();
  goBackToHomePage();
  posterImage.src = posterImgInput.value;
  posterTitle.innerText = posterTitleInput.value;
  posterQuote.innerText = posterQuoteInput.value;
  images.push(posterImgInput.value);
  titles.push(posterTitleInput.value);
  quotes.push(posterQuoteInput.value);
  posterInstance();
}

function saveMyPoster() {
  if (!savedPosters.includes(currentPoster)){
  savedPosters.push(currentPoster);
 }
}
