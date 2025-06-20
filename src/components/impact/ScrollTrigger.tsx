
import { useEffect } from 'react';

const ScrollTrigger = () => {
  useEffect(() => {
    // Enhanced intersection observer with multiple thresholds
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          const delayMs = parseInt(delay);
          
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delayMs);
        }
      });
    };

    // Create observer with multiple thresholds for granular control
    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.1, 0.3, 0.6, 0.9],
      rootMargin: '0px 0px -5% 0px'
    });

    // Observe all scroll-trigger elements
    const scrollElements = document.querySelectorAll('.scroll-trigger');
    scrollElements.forEach((el) => observer.observe(el));

    // Enhanced parallax effect for sections
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.scroll-section');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.1;
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    // Smooth momentum scrolling detection
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16);
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return null;
};

export default ScrollTrigger;
