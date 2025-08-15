const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".menu-container");

const menuClassList = menu.classList;

burgerMenu.addEventListener("click", () => {
  if (menuClassList.contains("hide-menu")) {
    return menuClassList.remove("hide-menu");
  }
  menuClassList.add("hide-menu");
});

// LINK STATE MANAGEMENT
