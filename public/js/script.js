


// Code for displaying email on page after user click

const getLinks = document.getElementById("getLinks");
const emailLink = document.getElementById("emailLink").children[0]
const callLink = document.getElementById("callLink").children[0]

// displays email to page after user clicks
function email() {
    this.innerHTML = "MayyFaucher@gmail.com";
    emailLink.setAttribute("href", "mailto:MayyFaucher@gmail.com");
}
//displays phone to page after user clicks
function phone() {
    this.innerHTML = "(707) 672-4018"
    callLink.setAttribute("href", "tel:7076724018");
}

eButt.addEventListener("click", email);
cButt.addEventListener("click", phone);





const aboutMe = document.getElementById("getLinks");
const repos = document.getElementById("getLinks");
const getLinks = document.getElementById("getLinks");
