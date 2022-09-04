import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  function findVideos() {
    const videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    const button = video.querySelector('.video__link-button');
    const href = button.href;

    button.addEventListener('click', (evt) => {
      const iframe = createIframe(href);
      evt.preventDefault();
      button.remove();
      video.classList.add('is-playing');
      video.appendChild(iframe);
    });

    button.removeAttribute('href');
  }

  function createIframe(href) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(href));
    iframe.classList.add('video__media');

    return iframe;
  }

  function generateURL(href) {
    const query = '?rel=0&showinfo=0&autoplay=1';
    return href + query;
  }

  findVideos();

  // Utils

  const tabs = document.querySelector('.tabs__title-list');
  const tabsContent = document.querySelector('.tabs__content');
  const tab = tabs.querySelectorAll('li');
  const tabContent = tabsContent.querySelectorAll('ul');

  const setActiveTab = (index) => {
    tab.forEach((element) => element.classList.remove('is-active'));
    tabContent.forEach((element) => element.classList.remove('is-active'));
    tab[index].classList.add('is-active');
    tabContent[index].classList.add('is-active');
  };

  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
      setActiveTab(i);
    });
  }


  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
