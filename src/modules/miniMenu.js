"use strict";
const miniMenu = () => {
  const mMenuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");

  //функция открывания меню
  const openMenu = (e) => {
    menu.classList.add("is-open");
    mMenuToggle.classList.add("close-menu");
    document.body.style.overflow = "hidden"; //запрещаем прокрутку сайта под меню
  };
  //функция закрывания меню
  const closeMenu = (e) => {
    menu.classList.remove("is-open");
    mMenuToggle.classList.remove("close-menu");
    document.body.style.overflow = ""; //возвращает прокрутку сайта под меню
  };

  mMenuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.contains("is-open") ? closeMenu() : openMenu();
  });
};
export default miniMenu;
