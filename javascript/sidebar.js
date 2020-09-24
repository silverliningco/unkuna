// nkn.toggleAccordionSection opens or closes a section in an accordion.
nkn.toggleSidebarItems = function(toggle) {

    /*var myAccordion = nkn.findParentElement(toggle, "nkn-sidebar-section");*/
    var mySection = nkn.findParentElement(toggle, "nkn-sidebar-section");
    if (mySection) {
        if (mySection.classList.contains('nkn-open')) {
            mySection.classList.remove("nkn-open");
        } else {
            mySection.classList.add("nkn-open");
        }
    }
}

