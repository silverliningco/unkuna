// closeRemainingAccordion closes all sections in someAccordion except for someSection.
// This is typically used if you want an accordion by design to open only a single section at a time.
nkn.closeRemainingAccordion = function(someAccordion, someSection) {
    var mySections = someAccordion.getElementsByClassName("nkn-accordion-section");
    for (var indx = 0; indx < mySections.length; indx++) {
        if (mySections[indx] != someSection) {
            mySections[indx].classList.remove("nkn-open");
        }
    }
}


// nkn.toggleAccordionSection opens or closes a section in an accordion.
nkn.toggleAccordionSection = function(toggle) {
    var myAccordion = nkn.findParentElement(toggle, "nkn-accordion");
    var mySection = nkn.findParentElement(toggle, "nkn-accordion-section");
    if (mySection) {
        if (mySection.classList.contains("nkn-open")) {
            mySection.classList.remove("nkn-open");
        } else {
            mySection.classList.add("nkn-open");
            if (myAccordion.classList.contains("nkn-open-only-one")) {
                this.closeRemainingAccordion(myAccordion, mySection);
            }
        }
    }
}


