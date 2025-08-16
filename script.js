// =====================
// Fade-in Animation
// =====================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// =====================
// Toast Notification
// =====================
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 3000);
}
document.querySelectorAll("a[download]").forEach(btn => btn.addEventListener("click", () => showToast("Download started...")));

// =====================
// Modal Slideshow
// =====================
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = Array.from(document.querySelectorAll(".certificate-img"));
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => { modal.style.display = "block"; currentIndex = index; showImage(currentIndex); });
});

function showImage(index) { modalImg.src = images[index].src; }
closeBtn.addEventListener("click", () => modal.style.display = "none");
prevBtn.addEventListener("click", () => { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(currentIndex); });
nextBtn.addEventListener("click", () => { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); });
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });
document.addEventListener("keydown", e => {
  if(modal.style.display === "block"){
    if(e.key==="ArrowLeft") prevBtn.click();
    else if(e.key==="ArrowRight") nextBtn.click();
    else if(e.key==="Escape") closeBtn.click();
  }
});

// =====================
// Background Panel Animation
// =====================
const panels = document.querySelectorAll('#bgAnimation .panel');
const leftPanel = document.querySelector(".panel.left");
const rightPanel = document.querySelector(".panel.right");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  panels.forEach((panel,index)=>{ if(scrollY>index*200) panel.classList.add('active'); else panel.classList.remove('active'); });
  if(scrollY>50){ leftPanel.classList.add("active"); rightPanel.classList.add("active"); }
  else { leftPanel.classList.remove("active"); rightPanel.classList.remove("active"); }
});

// =====================
// EmailJS Contact Form
// =====================
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  .then(() => { alert("Message sent successfully! I will reply soon."); contactForm.reset(); })
  .catch(err => { console.error(err); alert("Oops! Something went wrong, try again."); });
});
