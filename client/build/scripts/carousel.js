window.addEventListener("resize", reposition, true);

setInterval(reposition, 100);

Array.from(document.getElementsByClassName("carousel")).forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    const id = e.target.getAttribute("data-id");
    document
      .getElementById("carousel-header-" + id)
      .classList.add("carousel-header-hidden");
    document
      .getElementById("carousel-subheader-" + id)
      .classList.add("carousel-header-hidden");
    document
      .getElementById("carousel-uploader-" + id)
      .classList.add("carousel-header-hidden");
  });
  reposition();
});

Array.from(document.getElementsByClassName("carousel")).forEach((element) => {
  element.addEventListener("mouseleave", (e) => {
    const id = e.target.getAttribute("data-id");
    document
      .getElementById("carousel-header-" + id)
      .classList.remove("carousel-header-hidden");
    document
      .getElementById("carousel-subheader-" + id)
      .classList.remove("carousel-header-hidden");
    document
      .getElementById("carousel-uploader-" + id)
      .classList.remove("carousel-header-hidden");
  });
});

function reposition() {
  const footer = document.getElementById("footer").getBoundingClientRect();
  const header = document.getElementById("root").getBoundingClientRect();
  const space = footer.top - header.bottom;

  Array.from(document.getElementsByClassName("carousel")).forEach((element) => {
    const childImage = element.lastChild.lastChild;

    if (childImage.naturalHeight > childImage.naturalWidth) {
      if (!element.classList.contains("carousel-tall")) {
        element.classList.add("carousel-tall");
      }
    } else {
      if (element.classList.contains("carousel-tall")) {
        element.classList.remove("carousel-tall");
      }
    }

    element.style.maxHeight = space + "px";
    element.style.top =
      footer.top -
      space / 2 -
      element.getBoundingClientRect().height / 2 +
      "px";
  });
}
