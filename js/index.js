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
  link.addEventListener("click", (e) => {});
});

const currentPath = window.location.pathname;

function setActiveLink() {
  menuItems.forEach((link) => {
    const currentLinkInLoop = link.getAttribute("href");
    const purgeLink = currentLinkInLoop.replace(".", "");
    console.log(purgeLink);
    console.log(currentPath);

    if (currentPath === purgeLink) {
      link.setAttribute("style", "color: #fff");
    }
  });
}

setActiveLink();
