const { response } = require("express");

window.onscroll = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

// Post-Grad Button Functionality
// 11/26/2022: alert when delete
// Docs: https://www.w3schools.com/js/js_popup.asp
let deleteButton = document.getElementById("delete-button");
function deleteAlert() {
  let warning;
  if (confirm("Are you sure you want to delete me?")) {
    alert(warning = "Pressing OK means this will be deleted instantly and can't be recovered. If unsure, message Kit for help.");
  } else {
    prompt("WARNING: 1. Please immediately refresh the page to prevent data loss. 2. Click OK to retain data. You will see an error message appear. ")
    alert(warning = "Error: Data loss complete. Please use the Create Book/Author Pages to make a new entry. (Press OK to retain data - Site Admin)");
  }
}


/* Note: Dark Mode Implementation started 4/21/2023, followed from: https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/  */


//Get the button
let scrollbutton = document.getElementById("scroll-button");

// When the user scrolls down 2px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 200 works
    // limit
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}