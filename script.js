// --- Hamburger menu ---
// get the button and the menu by their id
var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');

// when button clicked, toggle the open class
menuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
});

// close the menu when a link is clicked
var mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
});


// --- Smooth scroll for nav links ---
var allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// --- Scroll reveal animation ---
// select all elements to animate
var revealElements = document.querySelectorAll('.card, .step, .stat-box');

// CSS class to hide them first
revealElements.forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// IntersectionObserver watches when elements enter the screen
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // make it visible when it enters viewport
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // stop watching after it shows
    }
  });
}, { threshold: 0.15 });

// tell the observer to watch each element
revealElements.forEach(function(el) {
  observer.observe(el);
});


// --- Navbar changes colour on scroll ---
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000';
  } else {
    navbar.style.backgroundColor = '#111';
  }
});
