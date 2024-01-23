//toggle between showing and hiding the nav menu links
function burgerFunction(){
    var x = document.getElementById("options");
    if (x.style.display === "block"){
        x.style.display = "none";
        console.log("hamburger Menu is Closed")
    } else { 
        x.style.display = "block";
        console.log("Hamburger Menu is Open")
    }
}