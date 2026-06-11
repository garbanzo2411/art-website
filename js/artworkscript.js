document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalClose = document.getElementById("modal-close");

  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  let currentIndex = 0;

  function showArtwork(index) {
    const item = galleryItems[index];
    const img = item.querySelector("img");

    modalImg.src = img.src;
    modalImg.alt = img.alt;

    modalTitle.textContent = item.dataset.title || "";
    modalDesc.textContent = item.dataset.description || "";
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      showArtwork(currentIndex);
      modal.classList.add("open");
    });
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= galleryItems.length) {
      currentIndex = 0;
    }

    showArtwork(currentIndex);
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = galleryItems.length - 1;
    }

    showArtwork(currentIndex);
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;

    if (e.key === "Escape") {
      modal.classList.remove("open");
    }

    if (e.key === "ArrowRight") {
      nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
      prevBtn.click();
    }
  });
});
