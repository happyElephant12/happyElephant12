// Get the elements
const menuIcon = document.getElementById("menuIcon");
const sideMenu = document.getElementById("sideMenu");

// Function to open the side menu
menuIcon.onclick = function () {
  sideMenu.style.width = "250px"; // Open the menu
};

// Function to close the side menu
sideMenu.querySelector(".closebtn").onclick = function () {
  sideMenu.style.width = "0"; // Close the menu
};
