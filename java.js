const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Box-shadow animation for hero section

const links = document.getElementsByClassName("list-item");

Array.from(links).forEach((element) => {
  element.addEventListener("mouseover", () => {
    Array.from(links).forEach((el) => {
      if (el !== element) {
        el.classList.add("size");
      }
    });
  });

  element.addEventListener("mouseleave", () => {
    Array.from(links).forEach((el) => {
      el.classList.remove("size");
    });
  });
});

///////////////////////////////////////////////////////////
// Box-shadow animation for cuadros section

const images = document.getElementsByClassName("img-cont");

Array.from(images).forEach((element) => {
  element.addEventListener("mouseover", () => {
    Array.from(images).forEach((el) => {
      if (el !== element) {
        el.classList.add("shadow");
      }
    });
  });
  element.addEventListener("mouseleave", () => {
    Array.from(images).forEach((el) => {
      if (el !== element) {
        el.classList.remove("shadow");
      }
    });
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation for cuadros section

const allSetions = document.querySelector(".cuadros");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("visible");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

const addNewClass = function (section) {
  sectionObserver.observe(section);
  section.classList.remove("visible");
};

addNewClass(allSetions);

// allSetions.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.remove("visible");
// });

// sectionObserver.observe(allSetions);
// classList.remove("visible");
///////////////////////////////////////////////////////////
// Scrolling effect for the link

const linkToScroll = document.querySelector(".toscroll");

linkToScroll.addEventListener("click", function (e) {});
