let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
   
    
    let arrayLength  = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    
    getSidebar.style.width = "50px";
   
    
    let arrayLength  = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}

let toggleHome = function() {
    document.body.style.backgroundColor = "white";
}

let toggleRed = function() {
    document.body.style.backgroundColor = "red";
}

let toggleOrange = function() {
    document.body.style.backgroundColor = "orange";
}

let toggleYellow = function() {
    document.body.style.backgroundColor = "yellow";
}

let toggleGreen = function() {
    document.body.style.backgroundColor = "green";
}

let toggleBlue = function() {
    document.body.style.backgroundColor = "blue";
}

let togglePurple = function() {
    document.body.style.backgroundColor = "purple";
}

