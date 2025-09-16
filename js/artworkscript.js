document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("img").src;
      modalImg.alt = this.querySelector("img").alt;
      modalTitle.textContent = this.getAttribute("data-title");
      modalDesc.textContent = this.getAttribute("data-description");
      modal.classList.add("open");
    });
  });
  modalClose.addEventListener("click", function () {
    modal.classList.remove("open");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  });
});
