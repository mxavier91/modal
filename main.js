// Get Modal Element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for Open Click
modalBtn.addEventListener('click', openModal);

// Listen for Closed Click
closeBtn.addEventListener('click', closeModal);

// Listen for Outside click
window.addEventListener('click', clickOutside)

// function to open modal
function openModal() {
  modal.style.display = 'block';
}

// function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to close  modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}