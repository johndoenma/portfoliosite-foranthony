// OVERLAY NAV MENU SHOW HIDE

const mysitenav = document.querySelector('.site-header');
const mymenubutton = document.querySelector('.menu-button');

mymenubutton.onclick = function () {
  if (mysitenav.getAttribute('data-navstate') === 'open') {
    mysitenav.setAttribute('data-navstate', 'closed');
  } else {
    mysitenav.setAttribute('data-navstate', 'open');
  }
}

const myinlinelinks = document.querySelectorAll('.inline-scroll');
for (var i = 0; i < myinlinelinks.length; i++) {
  myinlinelinks[i].addEventListener('click', function (e) {
    mysitenav.setAttribute('data-navstate', 'closed');
  });
}


// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
let options = {
  rootMargin: "-200px 0px -200px 0px"
  // threshold: 0.25
};

const myobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-sectionstate', 'active');
    } else {
      entry.target.setAttribute('data-sectionstate', 'inactive');
    }
  });
}, options);
document.querySelectorAll('.animate-on-scroll').forEach((section) => {
  myobserver.observe(section);
});

// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
let options_2 = {
  rootMargin: "0px 0px 0px 0px"
  // threshold: 0.25
};

const mysiteheader = document.querySelector(".site-header");

const myobserver_2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('darksection')) {
        mysiteheader.setAttribute('data-colorstate', 'dark')
      } else {
        mysiteheader.setAttribute('data-colorstate', 'light')
      }
    }
  });

}, options_2);
document.querySelectorAll('header, section, footer').forEach((section) => {
  myobserver_2.observe(section);
});