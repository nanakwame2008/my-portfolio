//Scrolling
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Update current year
const d = new Date();
currentYear = d.getFullYear();
document.getElementById("year").innerHTML = currentYear


// About Me
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    };
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    };
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};


