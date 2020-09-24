// closeDropDown closes a specified dropdown.
nkn.closeDropdown = function(myDropdown) {
    if (myDropdown) {
        if (myDropdown.classList.contains('nkn-open')) {
            myDropdown.classList.remove("nkn-open");
        } 
    }
}

// dropdown opens or closes a dropdown by adding or removing CSS class nkn-open to the HTML element with class nkn-dropdown.
// toggle is the element which was clicked to trigger this function, ie. any element with data-nkn-role = dropdown-toggle.
nkn.dropdown = function(toggle) {  
    var myDropdown = nkn.findParentElement(toggle, "nkn-dropdown");
   
    function setDropPosition() {

        var contentDropdown = myDropdown.getElementsByClassName("nkn-content")[0];
        contentDropdown.style = null;
        
        function distanceFromBottom() {
            const windowHeight = window.innerHeight;
            const distanceFromWindowTop = contentDropdown.getBoundingClientRect().top;
            const elementHeight = contentDropdown.clientHeight;
            return windowHeight - distanceFromWindowTop - elementHeight;
        }

        // Vertical position.
        const canDropDown = contentDropdown.clientHeight < distanceFromBottom();
        // if we don't have space to show the dropdown content at the bottom of the dropdown, change postion to start from bottom side.
        if (!canDropDown) {
            contentDropdown.style.bottom = "40px";
        }
        else{ 
            contentDropdown.style.bottom = null;
        }

        // Horizontal position.
        var myDropdownPosition = myDropdown.parentNode.getBoundingClientRect();
        
        // If we are in scroll, use getBoundingClientRect to set correct position for dropdown content.
        if((myDropdownPosition.right >= 0) && (myDropdownPosition.left <= window.innerHeight)){
            contentDropdown.style.right = myDropdownPosition.right - 40 + "px";
        }else{
            contentDropdown.style.right = myDropdown.offsetRight - 40 + "px";
        }

        // If dropdown doesn't fit correctly in default position, change postion to start from right side.
        var widths = window.innerWidth - myDropdown.getBoundingClientRect().left - contentDropdown.clientWidth;
        if(widths < 0){
            contentDropdown.style.right = "1px";
            contentDropdown.style.left = null;
        }else{
            contentDropdown.style.right = null;
        }
    } 

    if (myDropdown) {
        if (myDropdown.classList.contains('nkn-open')) {
            myDropdown.classList.remove("nkn-open");                      
        } else {
            myDropdown.classList.add("nkn-open");   
            setDropPosition();      
        }
    }
}


