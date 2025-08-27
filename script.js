// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change icon
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });



// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animate');
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
scrollElements.forEach(el => scrollObserver.observe(el));

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){ backToTop.style.display='block'; }
  else { backToTop.style.display='none'; }
});
backToTop.addEventListener('click', ()=> { window.scrollTo({top:0, behavior:'smooth'}); });

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target/200;
    if(count < target){
      counter.innerText = Math.ceil(count+increment);
      setTimeout(updateCount, 10);
    }else{ counter.innerText = target; }
  };
  updateCount();
});

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex=0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showTestimonial(index){
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}
prevBtn.addEventListener('click', ()=>{
  currentIndex = (currentIndex-1 + testimonials.length)%testimonials.length;
  showTestimonial(currentIndex);
});
nextBtn.addEventListener('click', ()=>{
  currentIndex = (currentIndex+1)%testimonials.length;
  showTestimonial(currentIndex);
});
showTestimonial(currentIndex);

