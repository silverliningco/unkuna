var nkn = {
    // This is just a placeholder.
};


// nkn.hide hides HTML content by adding class name "nkn-hide" or replacing class name "nkn-show" with "nkn-hide".
// This function accepts either a string (the HTML id) or the actual DOM node you want to hide.
nkn.hide = function(someHTML) {

    var myHTML = null;

    if (typeof(someHTML) == "string") {
        myHTML = document.getElementById(someHTML);
    }
    else if (someHTML instanceof Element) {
        myHTML = someHTML;
    }

    if (myHTML) {
        if (myHTML.classList.contains('nkn-show')) {
            myHTML.classList.remove("nkn-show");
        } 
        myHTML.classList.add("nkn-hide");
    }
}


// nkn.show displays hidden HTML content by replacing class name "nkn-hide" with "nkn-show".
// This function accepts either a string (the HTML id) or the actual DOM node you want to show.
nkn.show = function(someHTML) {

    var myHTML = null;

    if (typeof(someHTML) == "string") {
        myHTML = document.getElementById(someHTML);
    }
    else if (someHTML instanceof Element) {
        myHTML = someHTML;
    }

    if (myHTML) {
        if (myHTML.classList.contains('nkn-hide')) {
            myHTML.classList.remove("nkn-hide");
        } 
        myHTML.classList.add("nkn-show");
    }
}


// nkn.showParentElement finds someElement's nearest parent with class name "nkn-hide" and calls nkn.show with this element.
// If a parent element with classname "nkn-show" instead of "nkn-hide" is encountered, we do nothing (element already shown).
nkn.showParentElement = function(someElement){

    function findHiddenElement(el) {
        while ((el = el.parentElement) && !(el.classList.contains("nkn-hide") || el.classList.contains("nkn-show"))) ;
        return el;
    }

    var myHiddenElement = findHiddenElement(someElement);
    if (myHiddenElement){
        nkn.show(myHiddenElement);
    }
};


// nkn.hideParentElement finds someElement's nearest parent with classname "nkn-show" and calls nkn.hide with this element.
// If a parent element with classname "nkn-hide" instead of "nkn-show" is encountered, we do nothing (element already hidden).
nkn.hideParentElement = function(someElement){

    function findShownElement(el) {
        while ((el = el.parentElement) && !(el.classList.contains("nkn-hide") || el.classList.contains("nkn-show"))) ;
        return el;
    }

    var myShownElement = findShownElement(someElement);
    if (myShownElement){
        nkn.hide(myShownElement);
    }
};


// nkn.findParentElement returns el's nearest parent element with the given CSS class.
nkn.findParentElement = function(el, className) {
    while ((el = el.parentElement)  &&  !el.classList.contains(className));
    return el;
}


// nkn.clickHandler is a global click handler which checks if event.target or
// any of event.target's parent elements has a defined data-nkn-role attribute.
// If an nkn-role is defined we call the corresponding handler function.
// IMPORTANT: if a client application attaches a custom click handler to an
// element with nkn-role or a parent element thereof, custom JavaScript may be required.
nkn.clickHandler = function(event) {

    // findNKNTarget returns el if el has a defined data-nkn-role attribute
    // or the nearest parent element which has a defined data-nkn-role attribute.
    function findNKNTarget(el) {
        while (!el.dataset.nknRole) {
            if (el.parentElement) {
                el = el.parentElement;
            } else {
                return null;
            }
        }
        return el;
    }
    // Find nkn-role of click target, if any.
    var nknRole = null;
    var nknTarget = findNKNTarget(event.target);
    if (nknTarget) {
        nknRole = nknTarget.getAttribute("data-nkn-role");
    }

    // If there are any dropdown open, close it.
    if(!nknRole || (nknTarget.parentElement.classList.contains("nkn-open") == false && nknTarget)){
        var myDropdowns = document.getElementsByClassName("nkn-dropdown");
        for (var i = 0; i < myDropdowns.length; i++) {
            nkn.closeDropdown(myDropdowns[i]);
        } 
    }

    // If there is no nkn-role, nothing further to do.
    if (!nknRole) {
        return false;
    }

    // If click target has a defined nkn-role, call corresponding handler function.
    switch (nknRole) {
        case "accordion-toggle":
            nkn.toggleAccordionItem(nknTarget);
            break;
        case "open-modal":
            nkn.openModal(nknTarget.getAttribute("data-nkn-target"));
            break;
        case "close-modal":
            nkn.closeModal(nknTarget);
            break;
        case "hamburger-toggle":
            nkn.toggleHamburger(nknTarget);
            break;
        case "navbar-toggle":
            nkn.toggleNavbar(nknTarget);
            break;
        case "dropdown-toggle":
            nkn.dropdown(nknTarget);
            break;
    }

    return false;
}


