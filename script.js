// Contact button alert
document.getElementById("contactBtn").addEventListener("click", function () {
  alert("Thank you for reaching out! I'll get back to you soon.");
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Toast Notification for downloads
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Attach toast to download buttons
document.querySelectorAll("a[download]").forEach(btn => {
  btn.addEventListener("click", () => {
    showToast("Download started...");
  });
});

// Modal functionality with slideshow
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const images = Array.from(document.querySelectorAll(".certificate-img"));
let currentIndex = 0;

// Open modal when clicking certificate
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    currentIndex = index;
    showImage(currentIndex);
  });
});

// Show image based on index
function showImage(index) {
  modalImg.src = images[index].src;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigate previous
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Navigate next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Close when clicking outside the image
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
    } else if (e.key === "Escape") {
      closeBtn.click();
    }
  }
});
