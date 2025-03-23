document.addEventListener('DOMContentLoaded', () => {

    const parallaxHero = () => {
        const heroSection = document.querySelector('.my-hero-section');
        window.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          
          const moveX = (clientX - centerX) / 50;
          const moveY = (clientY - centerY) / 50;
          
          heroSection.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        });
      };

      parallaxHero();
    
      // Interactive Project Showcase
      const projectInteractivity = () => {
        const projects = document.querySelectorAll('.projects__row');
        
        projects.forEach(project => {
          const projectImage = project.querySelector('.projects__row-img');
          const projectContent = project.querySelector('.projects__row-content');
          
          // Create overlay effect
          const overlay = document.createElement('div');
          overlay.classList.add('project-overlay');
          project.appendChild(overlay);
          
          project.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
            projectImage.style.filter = 'brightness(70%)';
            projectContent.style.transform = 'translateY(-10px)';
          });
          
          project.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
            projectImage.style.filter = 'brightness(100%)';
            projectContent.style.transform = 'translateY(0)';
          });
        });
      };
      projectInteractivity();
    
    
      // Interactive Timeline for Experience
      const createInteractiveTimeline = () => {
        const experienceSection = document.querySelector('#experience');
        const experiences = document.querySelectorAll('.experience__row');
        
        experiences.forEach((exp, index) => {
          // Add timeline dot
          const timelineDot = document.createElement('div');
          timelineDot.classList.add('timeline-dot');
          exp.appendChild(timelineDot);
          
          // Add interaction
          exp.addEventListener('mouseenter', () => {
            timelineDot.style.transform = 'scale(1.5)';
            timelineDot.style.backgroundColor = '#0062b9';
            exp.style.transform = 'scale(1.02)';
          });
          
          exp.addEventListener('mouseleave', () => {
            timelineDot.style.transform = 'scale(1)';
            timelineDot.style.backgroundColor = '#ccc';
            exp.style.transform = 'scale(1)';
          });
        });
      };
      createInteractiveTimeline();
    

      // Interactive Background Particles
      const createParticleBackground = () => {
        const particlesContainer = document.createElement('div');
        particlesContainer.classList.add('particles-background');
        document.body.insertBefore(particlesContainer, document.body.firstChild);
        
        const createParticle = () => {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
          
          particlesContainer.appendChild(particle);
          
          // Remove particle after animation
          particle.addEventListener('animationend', () => {
            particle.remove();
            createParticle();
          });
        };
        
        // Create initial particles
        for (let i = 0; i < 50; i++) {
          createParticle();
        }
      };
      createParticleBackground();
    });
    // Scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Add fade-in animation to sections
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => {
      el.classList.add('fade-in');
      fadeInObserver.observe(el);
    });
  
    // Typing effect for hero section
    const typingEffect = () => {
      const heroText = document.querySelector('.text-primary');
      if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
          if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
          }
        };
        
        typeWriter();
      }
    };
    typingEffect();
  
    // Skill hover animation
    const skills = document.querySelectorAll('.skills__skill');
    skills.forEach(skill => {
      skill.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.backgroundColor = 'rgba(0, 98, 185, 0.2)';
      });
  
      skill.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = 'rgba(107, 170, 241, 0.2)';
      });
    });
  
    // Project hover effect
    const projectRows = document.querySelectorAll('.projects__row');
    projectRows.forEach(row => {
      const image = row.querySelector('.projects__row-img');
      const content = row.querySelector('.projects__row-content');
  
      row.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        content.style.transform = 'translateX(10px)';
      });
  
      row.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        content.style.transform = 'translateX(0)';
      });
    });
  
    // Scroll progress bar
    const scrollProgressBar = () => {
      const progressBar = document.createElement('div');
      progressBar.classList.add('scroll-progress-bar');
      document.body.appendChild(progressBar);
  
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = `${scrolled}%`;
      });
    };
    scrollProgressBar();
  
    // Cursor trail effect
    // const createCursorTrail = () => {
    //   const trail = document.createElement('div');
    //   trail.classList.add('cursor-trail');
    //   document.body.appendChild(trail);
  
    //   document.addEventListener('mousemove', (e) => {
    //     trail.style.left = `${e.clientX}px`;
    //     trail.style.top = `${e.clientY}px`;
    //   });
    // };
    // createCursorTrail();



    // Skill Logo Interactions
const skillLogoAnimations = () => {
    const skillLogos = document.querySelectorAll('.skills__skill');
    
    skillLogos.forEach(logo => {
      // Random initial rotation
      logo.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Hover effect
      logo.addEventListener('mouseenter', (e) => {
        const img = e.currentTarget.querySelector('img');
        
        // Pulse animation
        img.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' }
        ], {
          duration: 600,
          easing: 'ease-in-out'
        });
        
        // Subtle glow effect
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 98, 185, 0.5)';
      });
      
      logo.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });
  };
  
  // Interactive Skill Progression
  const skillProgressionEffect = () => {
    const skillLogos = document.querySelectorAll('.skills__skill');
    
    skillLogos.forEach((logo, index) => {
      // Staggered entrance animation
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        logo.animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 500,
          delay: index * 100,
          fill: 'forwards',
          easing: 'ease-out'
        });
      }, 500);
    });
  };
  
  const form = document.getElementById("contact__form")
const fname = document.getElementById("name").value
const email = document.getElementById("email").value
const description = document.getElementById("description").value
const submitButton = document.getElementById("submit_button")

submitButton.addEventListener("click",(event)=>{
  event.preventDefault()
  if(fname.value == "" || email.value == "" || description.value == "" ){
    alert("Enter all the required details.")
  }
  else{
    alert("Your proposal has been sent.")
    fname=""
    email=""
    description=""
    console.log("Clicked Submit button")
  }
  });

  document.addEventListener('DOMContentLoaded', () => {
    skillLogoAnimations();
    skillProgressionEffect();
  });