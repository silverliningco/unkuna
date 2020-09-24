// When page is ready we add a click event listener to the HTML body.
// If the event target has a data-nkn-role attribute, we'll do something with the event.
document.addEventListener("DOMContentLoaded", function(event) { 
    document.body.addEventListener("click", nkn.clickHandler);
});


