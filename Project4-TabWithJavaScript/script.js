function makeTabActive(event, tab){
    //Hide all tab contents
    var tabContents = document.querySelectorAll(".tab-content-item");
    for (var i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    
    //Remove #active class from all tab buttons
    var tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active-tab"));

    //Get the clicked tab button and make it active
    event.currentTarget.classList.add("active-tab");

    //Show the clicked tab's content
    document.getElementById(tab).style.display = "block";
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-content-item').style.display = 'block';
  });