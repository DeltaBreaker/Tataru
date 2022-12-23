const headerIcon = document.getElementById("header-icon");
const headerList = document.getElementById("header-list");
const headerMenu = document.getElementById("header-menu");

headerIcon.addEventListener("mouseover", (event) => {
  expandMenu();
});

headerMenu.addEventListener("mouseleave", (event) => {
  retractMenu();
});

function expandMenu() {
  headerList.classList.add("header-list-expand");
}

function retractMenu() {
  headerList.classList.remove("header-list-expand");
}
