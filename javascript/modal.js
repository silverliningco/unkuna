// closeModal closes a modal by removing CSS class nkn-open from the modal's container.
nkn.closeModal = function(closeButton) {
    var myModalContainer = nkn.findParentElement(closeButton, "nkn-modal-container");
    if (myModalContainer) {
        myModalContainer.classList.remove("nkn-open");
    }
}


// openModal opens a modal by adding CSS class nkn-open to the modal's container.
// The caller may pass either a string with the modal's DOM element id or the modal's actual DOM element.
nkn.openModal = function(someHTML) {

    var myHTML = null;

    if (typeof(someHTML) == "string") {
        myHTML = document.getElementById(someHTML);
    }
    else if (someHTML instanceof Element) {
        myHTML = someHTML;
    }

    var myModalContainer = nkn.findParentElement(myHTML, "nkn-modal-container");
    if (myModalContainer) {
        myModalContainer.classList.add("nkn-open");
    }
}




