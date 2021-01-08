//nkn.sidebarToggle opens or closes sidebar
nkn.sidebarToggle = function(toggle) {
    var mySection = document.getElementById("nkn-sidebar");
    if (mySection) {
        if (mySection.classList.contains('nkn-open')) {
            mySection.classList.remove("nkn-open");
        } else {
            mySection.classList.add("nkn-open");
        }
    } 
}

/*Quiero que cuando le hagan clck a un LI se agregue una clase */
var mySection = document.querySelectorAll("#nkn-sidebar")[0];
mySection.addEventListener("click",function(e){

    console.log(e.target);
})


