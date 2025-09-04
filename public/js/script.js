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

function adminTrigger() {
  let confirm = prompt("Please enter the secret passcode now.");
  let danger = "There has been an error. If you are a student having trouble logging in, please reach out to Kit.";
  let auth = "Request authenticated. Now loading...";
  
    let record = confirm;
    let passcode = process.env.PASSWORD;

    if (!record || record == "" || null) {
      window.location.replace("/");
    }

    while(record){
      if (record == !passcode) {
      alert(danger);
    } else if (record == passcode) {
      // once past, user can see the entries
      alert(auth);
      break;
    } else {
      let check = prompt("Please enter the secret passcode again.");
      if (check == !passcode) {
        window.location.replace("/");
      } else {
        window.location.href("/");
      }
      
    } 
  }

};
