'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnsCloseModal = document.querySelectorAll('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  const locationsModal = document.querySelector('.locations');
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#about');
  const nav = document.querySelector('.nav');
  const tabs = document.querySelectorAll('.operations__tab');
  const tabsContainer = document.querySelector('.operations__tab-container');
  const tabsContent = document.querySelectorAll('.operations__content');
  const navigable = document.querySelectorAll('.navigable');
  /////////////////////////////////////////////////
  // Modal window
  const openModal = function (e) {
    e.preventDefault();
    const targetText = e.target.textContent;

    // Open the correct modal based on button text
    if (targetText === 'Contact Us' || targetText === 'Contact' || targetText === 'Enquire Now' || targetText === 'Franchise') {
      window.location.href = './form/contact.html';
    } else if (targetText === 'Locations') {
      locationsModal.classList.remove('hidden');
      locationsModal.removeAttribute('inert');
    }
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    locationsModal.classList.add('hidden');
    locationsModal.setAttribute('inert', '');

    // Hide overlay
    overlay.classList.add('hidden');
  };

  // Add event listeners to open modals
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

  // Add event listeners to close modals
  btnsCloseModal.forEach(btn => btn.addEventListener('click', closeModal));
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    // Close modal on 'Escape' key if any modal is open
    if (e.key === 'Escape' && (!modal.classList.contains('hidden') || !locationsModal.classList.contains('hidden'))) {
      closeModal();
    }
  });
  ///////////////////////////////////////////////////////
  document.querySelector('.nav__toggle').addEventListener('click', function () {
    document.querySelector('.nav__links').classList.toggle('nav__links--visible');
  });

  //////////////////////////////////////////////////////
  // Learn More Button scrolling
  btnScrollTo.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  /////////////////////////////////////////////////////
  // Page navigation

  // 1. Add event listener to common parent element
  // 2. Determine what element originated the event
  navigable.forEach(link => {
    addEventListener('click', function (e) {
      e.preventDefault();
    
      // Matching strategy
      if (e.target.classList.contains('navigable')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  //////////////////////////////////////////////////
  // Tabbed component

  tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });

  ///////////////////////////////////////////////////
  // Menu fade animation
  const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };

  // Passing "argument" into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));

  ////////////////////////////////////////////////////
  // Sticky navigation: Intersection Observer API

  const header = document.querySelector('.header');
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);

  //////////////////////////////////////////////////
  // Reveal sections
  const allSections = document.querySelectorAll('.section');

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });

  // Lazy loading images
  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  });

  imgTargets.forEach(img => imgObserver.observe(img));

  ///////////////////////////////////////////////////
  // Slider
  const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };
    // Prev slide
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
    // Init slide
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();
});

