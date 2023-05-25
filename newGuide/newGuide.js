// Get the button element
var learnMore = document.getElementById("learnMore");

// Add click event listener to the button
learnMore.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "../learn_more/learn_more.html";
});


// Get the button element
var aboutButton = document.getElementById("aboutButton");

// Add click event listener to the button
aboutButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = '../about_us/about_us.html';
});


// Get the button element
var homeButton = document.getElementById("homeButton");

// Add click event listener to the button
homeButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "../index.html";
});


// Get the button element
var resultsButton = document.getElementById("guideButton");

// Add click event listener to the button
resultsButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "../newGuide/newGuide.html";
});


// Function to flip the card
function flipCard(index) {
  const card = document.getElementsByClassName('item')[index];
  card.classList.toggle('flipped');
}

// Scroll to the top of the page on load/refresh
window.addEventListener('load', () => {
  // Scroll to the top with smooth behavior
  window.scrollTo({ top: 0, behavior: 'auto' });
});

var artButton = document.getElementById("artButton");
artButton.addEventListener("click", function() {
  window.scrollTo({top: 490});
});

var runningButton = document.getElementById("runningButton");
runningButton.addEventListener("click", function() {
  window.scrollTo({top: 1283});
});

var liftingButton = document.getElementById("liftingButton");
liftingButton.addEventListener("click", function() {
  window.scrollTo({top: 2073});
});

var readingButton = document.getElementById("readingButton");
readingButton.addEventListener("click", function() {
  window.scrollTo({top: 2470});
});

var musicButton = document.getElementById("musicButton");
musicButton.addEventListener("click", function() {
  window.scrollTo({top: 2869});
});

var makeupButton = document.getElementById("makeupButton");
makeupButton.addEventListener("click", function() {
  window.scrollTo({top: 3265});
});

var fashionButton = document.getElementById("fashionButton");
fashionButton.addEventListener("click", function() {
  window.scrollTo({top: 4058});
});

var skiingButton = document.getElementById("skiingButton");
skiingButton.addEventListener("click", function() {
  window.scrollTo({top: 4850});
});

var foodButton = document.getElementById("foodButton");
foodButton.addEventListener("click", function() {
  window.scrollTo({top: 5246});
});

var hikingButton = document.getElementById("hikingButton");
hikingButton.addEventListener("click", function() {
  window.scrollTo({top: 6434});
});

var paButton = document.getElementById("paButton");
paButton.addEventListener("click", function() {
  window.scrollTo({top: 7226});
});

var sportsButton = document.getElementById("sportsButton");
sportsButton.addEventListener("click", function() {
  window.scrollTo({top: 8018});
});


// Get all elements with the ID "arrowButton"
var arrowButtons = document.querySelectorAll("#arrowButton");

// Attach the click event listener to each arrowButton
arrowButtons.forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
