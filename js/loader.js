const content = document.querySelector("#content");
const loaderContainer = document.querySelector("#loader-container");
const ANIMATION_DELAT = 1000 * 4;

function hideLoader() {
  setTimeout(() => {
    // SHOW CONTENT
    content.classList.remove("hide-content");
    // HIDE LOADER ANIMATION
    loaderContainer.classList.remove("loader-container");
    loaderContainer.classList.add("hide-content");

    document.body.style.overflow = "auto";
  }, ANIMATION_DELAT);
}

hideLoader();
