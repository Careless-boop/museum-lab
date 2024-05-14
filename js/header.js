const header = document.getElementById("header-nav");

const highlightClass = "visible";

const handleScroll = () => {
  const clientHeight = window.innerHeight;

  const scrollPosition = window.scrollY;

  if (scrollPosition > clientHeight) {
    header.classList.add(highlightClass);
  } else {
    header.classList.remove(highlightClass);
  }
};

window.addEventListener("scroll", handleScroll);
