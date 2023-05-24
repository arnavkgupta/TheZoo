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

// Function to flip the card
function flipCard(index) {
  const card = document.getElementsByClassName('item')[index];
  card.classList.toggle('flipped');
}

// Get the filter input and checkboxes
const filterInput = document.getElementById('filterInput');
const checkboxes = document.querySelectorAll('.filter-checkbox');

// Attach event listeners
filterInput.addEventListener('input', filterItems);
checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterItems));

// Call filterItems() initially
filterItems();

