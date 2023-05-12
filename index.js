// Get the button element
var arrow = document.getElementById("arrowButton");

// Add click event listener to the button
arrow.addEventListener("click", function() {
  // Navigate to the desired page
  window.scrollBy(0, 950);
});

// Get the button element
var aboutButton = document.getElementById("aboutButton");

// Add click event listener to the button
aboutButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = 'about_us/about_us.html';
});

// Get the button element
var resultsButton = document.getElementById("resultsButton");

// Add click event listener to the button
resultsButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "newGuide/newGuide.html";
});

// Get the button element
var startButton = document.getElementById("getStarted");

// Add click event listener to the button
startButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "home/home.html";
});

// Get the button element
var dashboardButton = document.getElementById("dashboardButton");

// Add click event listener to the button
dashboardButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "learn_more/learn_more.html";
});