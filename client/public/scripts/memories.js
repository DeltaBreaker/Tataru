Array.from(document.getElementsByClassName("memory-preview")).forEach(
  (element) => {
    element.addEventListener("mouseenter", (e) => {
      const id = e.target.getAttribute("data-id");

      document
        .getElementById("memory-preview-header-" + id)
        .classList.add("memory-header-hidden");

      document
        .getElementById("memory-preview-subheader-" + id)
        .classList.add("memory-header-hidden");

      document
        .getElementById("memory-preview-uploader-" + id)
        .classList.add("memory-header-hidden");
    });
  }
);

Array.from(document.getElementsByClassName("memory-preview")).forEach(
  (element) => {
    element.addEventListener("mouseleave", (e) => {
      const id = e.target.getAttribute("data-id");

      document
        .getElementById("memory-preview-header-" + id)
        .classList.remove("memory-header-hidden");

      document
        .getElementById("memory-preview-subheader-" + id)
        .classList.remove("memory-header-hidden");

      document
        .getElementById("memory-preview-uploader-" + id)
        .classList.remove("memory-header-hidden");
    });
  }
);
