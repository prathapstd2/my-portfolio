function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.querySelector('.hamburger-icon').addEventListener('click', function () {
  const menuLinks = document.querySelector('.menu-links');
  if (menuLinks.classList.contains('open')) {
    menuLinks.style.zIndex = '1000';
  } else {
    menuLinks.style.zIndex = '0';
  }
});
