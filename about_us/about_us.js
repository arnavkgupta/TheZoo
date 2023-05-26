// Get the button element
var learnMoreButton = document.getElementById("learnMore");

// Add click event listener to the button
learnMoreButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "../newGuide/newGuide.html";
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
var resultsButton = document.getElementById("resultsButton");

// Add click event listener to the button
resultsButton.addEventListener("click", function() {
  // Navigate to the desired page
  window.location.href = "../learn_more/learn_more.html";
});

var oldText = document.getElementById("blurb").innerHTML; 

function openPopup() {
  document.getElementById("about").textContent = "Pranav Vasan";
  document.getElementById("who").textContent = "Student at the University of Washington studying Informatics";
  document.getElementById("whoBlurb").textContent = "Loves to dance, sing, and explore new genres of music";
  document.getElementById("video").style.visibility = "hidden"; 

  document.getElementById("who").style.fontSize = '20px';


}

function openPopupTwo() {
  document.getElementById("about").textContent = "Rhea Guliani";
  document.getElementById("who").textContent = "Student at the University of Washington studying Informatics";
  document.getElementById("whoBlurb").textContent = "Loves sports, driving, and nature!";
  document.getElementById("video").style.visibility = "hidden"; 

  document.getElementById("who").style.fontSize = '20px';
}

function openPopupThree() {
  document.getElementById("about").textContent = "Raveena Rao";
  document.getElementById("who").textContent = "Student at the University of Washington studying Informatics";
  document.getElementById("whoBlurb").textContent = "Enjoys watching basketball, eating exotic foods, and dogs";
  document.getElementById("video").style.visibility = "hidden"; 

  document.getElementById("who");
}

function openPopupFour() {
  document.getElementById("about").textContent = "Arnav Gupta";
  document.getElementById("who").textContent = "Student at the University of Washington studying Informatics";
  document.getElementById("whoBlurb").textContent = "Loves dancing, working out, and traveling";
  document.getElementById("video").style.visibility = "hidden"; 

  document.getElementById("who").style.fontSize = '20px';
}

function closePopup() {
  document.getElementById("about").textContent = "About Us";
  document.getElementById("blurb").innerHTML = oldText;
  document.getElementById("video").style.visibility = "visible"; 




}

