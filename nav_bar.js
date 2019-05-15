/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className += " responsive";
    z.className += " open";
  } else {
    x.className = "topnav";
    y.className = "gallery_title_area";
    z.classList.remove("open")
  }
}

const y = document.querySelector('.gallery_title_area');
const z = document.querySelector('.navicon-button');

