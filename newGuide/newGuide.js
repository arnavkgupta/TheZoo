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

<<<<<<< HEAD
=======
// Function to filter the items
function filterItems() {
  // Get the value entered in the input
  const filterValue = filterInput.value.toLowerCase();

  // Get the selected checkboxes
  const selectedCheckboxes = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value.toLowerCase());

  // Get the items
  const items = document.querySelectorAll('.item');

  // Loop through each item
  items.forEach(item => {
    const category = item.getAttribute('data-category').toLowerCase();

    // Check if the item matches the filter value and selected checkboxes
    const matchFilter = filterValue === '' || item.innerText.toLowerCase().includes(filterValue);
    const matchCategory = selectedCheckboxes.length === 0 || selectedCheckboxes.includes(category);

    // Show or hide the item based on filter and checkbox matches
    if (matchFilter && matchCategory) {
      item.style.display = 'flex'; // Show the item
      if(item.innerText.toLowerCase().includes(filterValue) && selectedCheckboxes.includes(category)) {
        item.style.display = 'flex'; 
        item.style.flexDirection = 'column'; 
        item.style.flexWrap = 'wrap';
        
      }
      
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });
}

>>>>>>> 01ae1aec4b3c21a43c46403113f55d5035e63278
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