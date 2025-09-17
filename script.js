function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let name = document.getElementById("name");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>" + "<br/>" + "-" + name.value;
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
    name.value = "";
    showPopup(true);
  }
  else {
    console.log("No recommendation entered");
    // Call showPopup2 here
    showPopup2(true);
  }
  
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    }
    else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}

function showPopup2(bool) {
    if (bool) {
        document.getElementById('popup2').style.visibility = 'visible'
    }
    else {
        document.getElementById('popup2').style.visibility = 'hidden'
    }
}