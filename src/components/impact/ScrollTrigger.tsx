
import { useEffect } from 'react';

const ScrollTrigger = () => {
  useEffect(() => {
    // Enhanced intersection observer with multiple thresholds and staggered animations
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
      rootMargin: '0px 0px -10% 0px'
    });

    // Observe all scroll-trigger elements
    const scrollElements = document.querySelectorAll('.scroll-trigger');
    scrollElements.forEach((el) => observer.observe(el));

    // Enhanced parallax effect for sections with proper type casting
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.scroll-section');
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const rate = scrolled * -0.05;
        htmlElement.style.transform = `translateY(${rate}px)`;
      });

      // Section-to-section smooth transitions
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          const htmlSection = section as HTMLElement;
          htmlSection.style.opacity = `${0.3 + (progress * 0.7)}`;
        }
      });
    };

    // Smooth momentum scrolling detection with performance optimization
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16);
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    // Initial call to set up initial states
    handleScroll();

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return null;
};

export default ScrollTrigger;
