function myFunction() {
    var x = document.getElementById("nav-menu");

    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}