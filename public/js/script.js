


// Code for displaying email on page after user click
const eButt = document.getElementById("emailLink");
const cButt = document.getElementById("callLink");
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

if(eButt){
eButt.addEventListener("click", email);
cButt.addEventListener("click", phone);
}




const aboutMe = document.getElementById("AboutMay");
const repos = document.getElementById("projects");
const contacts = document.getElementById("contacts");
const mobileFooter = document.getElementById("mobileFooter");

const name = document.getElementById("name");
const asideAbout = document.getElementById("asideAbout");
const asideProjects = document.getElementById("asideProjects");
const asideContact = document.getElementById("asideContact");

if (asideAbout) {
    name.addEventListener("click", function () {
        aboutMe.style.display = "flex";
        repos.style.display = "none";
        contacts.style.display = "none";
        mobileFooter.style.display = "none";
    })

    asideAbout.addEventListener("click", function () {
        aboutMe.style.display = "flex";
        repos.style.display = "none";
        contacts.style.display = "none";
        mobileFooter.style.display = "none";
    })

    asideProjects.addEventListener("click", function () {
        aboutMe.style.display = "none";
        repos.style.display = "flex";
        contacts.style.display = "none";
        mobileFooter.style.display = "none";
    })

    asideContact.addEventListener("click", function () {
        aboutMe.style.display = "none";
        repos.style.display = "none";
        contacts.style.display = "flex";
        mobileFooter.style.display = "none";
    })
} else {
    aboutMe.style.display = "flex";
    repos.style.display = "flex";
    contacts.style.display = "flex";
    mobileFooter.style.display = "flex";
}

// const particlee = document.getElementById("particle");
// if(asideAbout){
//     particlee.style.width = "auto"
// }



// Super easy way to fix problems with scaling up and down page after interacting with aside bar
if (document.getElementById("navbarJSTarget")) {
    document.getElementById("navbarJSTarget").addEventListener("click", function () {
        aboutMe.style.display = "flex";
        repos.style.display = "flex";
        contacts.style.display = "flex";
        mobileFooter.style.display = "none";
    })
}