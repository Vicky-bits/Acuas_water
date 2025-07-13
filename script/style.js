
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('header .navbar ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

document.addEventListener('DOMContentLoaded', function() {
const featureSection = document.getElementById('our-feature');
    
    function checkScroll() {
        const sectionTop = featureSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When 75% of the section is visible
        if (sectionTop < windowHeight * 0.75) {
            featureSection.classList.add('show');
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
    // Check on load and scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check if already in view on load
});


document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about-us');

  function revealOnScroll() {
    const top = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.75) {
      aboutSection.classList.add('show');
      window.removeEventListener('scroll', revealOnScroll);
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
  const factorySection = document.getElementById('factory-section');

  function revealFactory() {
    const top = factorySection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.75) {
      factorySection.classList.add('show');
      startCounting(); 
      window.removeEventListener('scroll', revealFactory);
    }
  }

  function startCounting() {
    const counters = factorySection.querySelectorAll('h2[data-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const start = counter.getAttribute('data-start')
        ? +counter.getAttribute('data-start')
        : 130;

      let current = start;

      let step, speed;
      if (target > 100) {
        step = 5;
        speed = 20;
      } else {
        step = 2;
        speed = 100; // slow for small numbers
      }

      const increment = () => {
        if (current < target) {
          current += step;
          if (current > target) current = target;
          counter.textContent = current + '+';
          setTimeout(increment, speed);
        } else {
          counter.textContent = target + '+';
        }
      };

      increment();
    });
  }

  window.addEventListener('scroll', revealFactory);
  revealFactory();
});
