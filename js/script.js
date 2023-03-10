// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's address and displays it back to user
  // get street name from text field
  let StreetName = document.getElementById("stname").value
	// get house number from text field and cast it to integer
  let HouseNumber = parseInt(document.getElementById("housename").value)
  // display address back to user
  document.getElementById('user-info').innerHTML = "Your address is" + StreetName + HouseNumber + " ."
}