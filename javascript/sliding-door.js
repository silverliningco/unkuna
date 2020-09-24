// closeSlidingDoor closes the sliding where event's target is located, if it is inside a sliding door.
// This is typically used if you want a sliding door to close automatically when a user clicks on one of the links inside the sliding door.
// The client must manually call this function, it is not automatic.
nkn.closeSlidingDoor = function(e) {
    var mySlidingDoor = nkn.findParentElement(e.target, "nkn-sliding-door-frame");
    if (mySlidingDoor) {
        mySlidingDoor.classList.remove("nkn-open");
    }
}

// slideDoor opens or closes a sliding door by adding or removing CSS class nkn-open to the HTML element with class nkn-sliding-door.
// toggle is the element which was clicked to trigger this function, ie. any element with data-nkn-role = sliding-door-knob.
nkn.slideDoor = function(toggle) {  
    var mySlidingDoor = nkn.findParentElement(toggle, "nkn-sliding-door-frame");
    if (mySlidingDoor) {
        if (mySlidingDoor.classList.contains('nkn-open')) {
            mySlidingDoor.classList.remove("nkn-open");                      
        } else {
            mySlidingDoor.classList.add("nkn-open");
        }
    }
}


