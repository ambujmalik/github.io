// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {threshold:0.2, rootMargin:"0px 0px -50px 0px"});
faders.forEach(fader=>appearOnScroll.observe(fader));

// Toast for downloads
function showToast(message){
  const toast=document.createElement('div');
  toast.className='toast';
  toast.innerText=message;
  document.body.appendChild(toast);
  setTimeout(()=>toast.classList.add('show'),100);
  setTimeout(()=>{toast.classList.remove('show'); setTimeout(()=>toast.remove(),300)},3000);
}
document.querySelectorAll('a[download]').forEach(btn=>{btn.addEventListener('click',()=>showToast('Download started...'));});

// Modal slideshow
const modal=document.getElementById('imgModal');
const modalImg=document.getElementById('modalImage');
const closeBtn=document.querySelector('.close');
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const images=Array.from(document.querySelectorAll('.certificate-img'));
let currentIndex=0;
images.forEach((img,index)=>{img.addEventListener('click',()=>{modal.style.display='block'; currentIndex=index; modalImg.src=images[currentIndex].src;});});
closeBtn.addEventListener('click',()=>modal.style.display='none');
prevBtn.addEventListener('click',()=>{currentIndex=(currentIndex-1+images.length)%images.length; modalImg.src=images[currentIndex].src;});
nextBtn.addEventListener('click',()=>{currentIndex=(currentIndex+1)%images.length; modalImg.src=images[currentIndex].src;});
window.addEventListener('click',e=>{if(e.target===modal) modal.style.display='none';});
document.addEventListener('keydown',e=>{if(modal.style.display==='block'){if(e.key==='ArrowLeft') prevBtn.click(); else if(e.key==='ArrowRight') nextBtn.click(); else if(e.key==='Escape') closeBtn.click();}});

// Iron Man panels scroll effect
const leftPanel = document.querySelector(".panel.left");
const rightPanel = document.querySelector(".panel.right");
window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    leftPanel.classList.add("active");
    rightPanel.classList.add("active");
  } else {
    leftPanel.classList.remove("active");
    rightPanel.classList.remove("active");
  }
});

// EmailJS Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  emailjs.sendForm('service_1dw1clq', 'template_wft17k5', this)
    .then(() => {
      alert('Message sent successfully!');
      contactForm.reset();
    }, (error) => {
      alert('Oops... Something went wrong. Please try again.');
      console.error(error);
    });
});
