/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__points',1.5,{opacity:0,y:-300,delay:0.2});
gsap.from('.home__rocket',1.5,{opacity:0,y:300,delay:.5});
gsap.from('.home__cloud_2',1.5,{opacity:0,y:-200,delay:.7});
gsap.from('.home__cloud_1',1.5,{opacity:0,y:-200,delay:.6});
gsap.from('.home__cloud_3',1.5,{opacity:0,y:200,delay:.2});
gsap.from('.home__content',1.5,{opacity:0,y:-100,delay:1.5});
gsap.from('.home__description',2,{opacity:0,y:-100,delay:2.1});

/*=============== about us ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about-us');
    const aboutContent = document.querySelector('.about-content');
  
    window.addEventListener('scroll', function() {
      const sectionPos = aboutSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 2;
  
      if (sectionPos < screenPos) {
        aboutContent.style.transform = 'translateY(0)';
      } else {
        aboutContent.style.transform = 'translateY(100%)';
      }
    });
  });
  
  /*=============== Contact us ANIMATION ===============*/
  document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact-us');
    const contactContent = document.querySelector('.contact-content');
  
    window.addEventListener('scroll', function() {
      const sectionPos = contactSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 2;
  
      if (sectionPos < screenPos) {
        contactContent.classList.add('visible');
      } else {
        contactContent.classList.remove('visible');
      }
    });
  });

  /*=============== Rocket infinit ANIMATION ===============*/
    document.addEventListener('DOMContentLoaded', function() {
    const rocket = document.getElementById('rocket');
    let angle = 0;
    let amplitude = 8; // Adjust the amplitude of the oscillation
    let frequency = 0.05; // Adjust the frequency of the oscillation
  
    function animateRocket() {
      angle += frequency;
      let translateY = amplitude * Math.sin(angle);
  
      rocket.style.transform = `translateY(${translateY}px)`;
  
      requestAnimationFrame(animateRocket);
    }
  
    animateRocket();
  });

       /*=============== about us stars ANIMATION ===============*/

       document.addEventListener('DOMContentLoaded', function() {
        const numStars = 50; // Number of stars
        const starContainer = document.createElement('div');
        starContainer.className = 'star-container';
        document.getElementById('about-us').appendChild(starContainer);
        
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.left = `${Math.random() * 100}%`; // Random horizontal position
          star.style.top = `${Math.random() * 100}%`; // Random vertical position
          star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration between 2-5 seconds
          star.style.animationDelay = `${Math.random() * 2}s`; // Random animation delay up to 2 seconds
          starContainer.appendChild(star);
        }
      });
      
       /*=============== HEADER Scroll NAV animation apear ===============*/ 
      document.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

     /*=============== HEADER ping color NAV  ===============*/
    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('.nav__link');
  
      navLinks.forEach(link => {
          link.addEventListener('click', function(event) {
              // Remove 'active' class from all links
              navLinks.forEach(link => link.classList.remove('active'));
  
              // Add 'active' class to the clicked link
              this.classList.add('active');
          });
      });
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about-section');

    const revealOnScroll = () => {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            aboutSection.style.opacity = '1';
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run the function on load to check if the section is already in view
});