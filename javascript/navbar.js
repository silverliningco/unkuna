// closeNavbar closes a responsive navbar by removing CSS class nkn-open.
// Clients usually do not need to call this directly, when opening a responsive navbar we automatically add "close" click handlers.
nkn.closeNavbar = function(e) {
    var myMenu = nkn.findParentElement(e.target, "nkn-navbar");
    if (myMenu) {
        myMenu.classList.remove("nkn-open");
    }
}


// toggleNavbar opens or closes a responsive navbar by adding or removing CSS class nkn-open to the  element with class nkn-navbar.
// toggle is the element which was clicked to trigger this function, ie. any element with data-nkn-role = navbar-toggle.
// When opening a responsive navbar, we add click handlers to each LI element to close the navbar when clicked for LI elements that has class nkn-nav-item.
nkn.toggleNavbar = function(toggle) {
    var myMenu = nkn.findParentElement(toggle, "nkn-navbar");
    if (myMenu) {
        if (myMenu.classList.contains('nkn-open')) {
            myMenu.classList.remove("nkn-open");
        } else {
            myMenu.classList.add("nkn-open");
            var myLinks = myMenu.querySelectorAll("LI");
            for (var indx = 0; indx < myLinks.length; indx++) {
                if (myLinks[indx].classList.contains("nkn-nav-item")) {
                    myLinks[indx].addEventListener("click", nkn.closeNavbar);
                }
            }
        }
    }
}


