// closeMenu closes a "hamburger" menu by removing CSS class nkn-open.
// Clients usually do not need to call this directly, when opening a menu we automatically add "close" click handlers.
nkn.closeMenu = function(e) {
    var myMenu = nkn.findParentElement(e.target, "nkn-container-hamburger-menu");
    if (myMenu) {
        myMenu.classList.remove("nkn-open");
    }
}


// toggleMenu opens or closes a "hamburger" menu by adding or removing CSS class nkn-open to the UL element with class nkn-hamburger-menu.
// toggle is the element which was clicked to trigger this function, ie. any element with data-nkn-role = menu-toggle.
// When opening a "hamburger" menu, we add click handlers to each LI element to close the menu when clicked.
nkn.toggleMenu = function(toggle) {
    var myMenu = nkn.findParentElement(toggle, "nkn-container-hamburger-menu");
    if (myMenu) {
        if (myMenu.classList.contains('nkn-open')) {
            myMenu.classList.remove("nkn-open");
        } else {
            myMenu.classList.add("nkn-open");
            var myLinks = myMenu.querySelectorAll("LI");
            for (var indx = 0; indx < myLinks.length; indx++) {
                if (myLinks[indx].getAttribute("data-nkn-role") != "menu-toggle") {
                    myLinks[indx].addEventListener("click", nkn.closeMenu);
                }
            }
        }
    }
}
