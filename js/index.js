const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".menu-container");

const menuItems = document.querySelectorAll("#menu-list > li > a");
const currentPath = window.location.pathname;

const menuClassList = menu.classList;

function handleMenuToggle() {
  burgerMenu.addEventListener("click", () => {
    if (menuClassList.contains("hide-menu")) {
      document.body.classList.add("prevent-body-scroll");
      return menuClassList.remove("hide-menu");
    }
    menuClassList.add("hide-menu");
    document.body.classList.remove("prevent-body-scroll");
  });
}

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
handleMenuToggle();
