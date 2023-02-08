window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.nav__list li a');
  let fromTop = window.scrollY;
  if (fromTop !== 0 && window.innerWidth > 900) {
    document.querySelector('header').classList.add('header_scroll')
  } else {
    document.querySelector('header').classList.remove('header_scroll')
  }
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('list__item_active');
    } else {
      link.classList.remove('list__item_active');
    }
  });
});

const mobileButton = document.querySelector('.contact-open');

mobileButton.addEventListener('click', () => {
  document.querySelector('.header__contact').classList.toggle('contact_active');
});
