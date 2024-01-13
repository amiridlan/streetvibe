// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var title = document.getElementById("title")
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display ="none";
        title.style.display = "block";
        menuicon.style.color = "#c299d0";
    } else {
        navlinks.style.display = "block";
        title.style.display = "none";
        menuicon.style.color = "#c299d0";
    }
}
