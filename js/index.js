const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".menu-container");

const menuItems = document.querySelectorAll("#menu-list > li > a");

const menuClassList = menu.classList;

burgerMenu.addEventListener("click", () => {
  if (menuClassList.contains("hide-menu")) {
    return menuClassList.remove("hide-menu");
  }
  menuClassList.add("hide-menu");
});

menuItems.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(menuClassList);
    if (menuClassList.contains("hide-menu")) {
      return menuClassList.remove("hide-menu");
    }
    // menuClassList.remove("hide-menu");
  });
});
