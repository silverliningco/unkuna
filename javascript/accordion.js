// closeRemainingAccordion closes all items in someAccordion except for someItem.
// This is typically used if you want an accordion by design to open only a single item at a time.
nkn.closeRemainingAccordion = function(someAccordion, someItem) {
    var myItems = someAccordion.getElementsByClassName("nkn-accordion-item");
    for (var indx = 0; indx < myItems.length; indx++) {
        if (myItems[indx] != someItem) {
            myItems[indx].classList.remove("nkn-open");
        }
    }
 }
  
  
 // nkn.toggleAccordionItem opens or closes an item in an accordion.
 nkn.toggleAccordionItem = function(toggle) {
    var myAccordion = nkn.findParentElement(toggle, "nkn-accordion");
    var myItem = nkn.findParentElement(toggle, "nkn-accordion-item");
    if (myItem) {
        if (myItem.classList.contains("nkn-open")) {
            myItem.classList.remove("nkn-open");
        } else {
            myItem.classList.add("nkn-open");
            if (myAccordion.classList.contains("nkn-open-only-one")) {
                this.closeRemainingAccordion(myAccordion, myItem);
            }
        }
    }
 }
 