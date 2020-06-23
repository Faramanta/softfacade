const menuBtn = document.querySelector('.mobile-nav__btn');
const menu = document.querySelector('.mobile-nav');
const page = document.querySelector('.page');

menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  page.classList.toggle('menu-opened');
});

const tab = document.querySelectorAll('.tabs__tab');
const tabPanel = document.querySelectorAll('.tabs__panel');

for (var i = 0; i < tab.length; i++) {

  tab[i].addEventListener('click', function () {

    for (var j = 0; j < tab.length; j++) {
      tab[j].classList.remove('active');
      tabPanel[j].classList.remove('active');
    }
    this.classList.add('active');

    const tabID = this.id;
    const panelID = document.getElementById(tabID + '-panel');
    panelID.classList.add('active');
  });
}
