import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  //  Удаление класса no-js
  const wrapper = document.querySelector('.wrapper');

  if (wrapper) {
    wrapper.classList.remove('no-js');
  }
  //  ---------------------------------

  //  Видео YouTube
  function findVideos() {
    const videos = document.querySelectorAll('.video');

    if (videos.length > 0) {
      for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
      }
    }
  }

  function setupVideo(video) {
    const button = video.querySelector('.video__link-button');
    const href = button.href;

    const startVideo = (evt) => {
      const iframe = createIframe(href);
      evt.preventDefault();
      button.remove();
      video.classList.add('is-playing');
      video.appendChild(iframe);
    };

    button.addEventListener('click', (evt) => {
      startVideo(evt);
    });

    button.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        startVideo(evt);
      }
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
  //  ---------------------------------

  // Tabs
  const tabsTitleList = document.querySelector('.tabs__title-list');
  const tabTitle = tabsTitleList.querySelectorAll('li');
  const tabsContent = document.querySelector('.tabs__content');
  const tabsContentList = tabsContent.querySelectorAll('ul');

  if (tabsTitleList && tabsContent && tabTitle.length > 0 && tabsContentList.length > 0) {
    const setActiveTab = (index) => {
      tabTitle.forEach((element) => element.classList.remove('is-active'));
      tabsContentList.forEach((element) => element.classList.remove('is-active'));
      tabTitle[index].classList.add('is-active');
      tabsContentList[index].classList.add('is-active');
    };

    for (let i = 0; i < tabTitle.length; i++) {
      tabTitle[i].addEventListener('click', () => {
        setActiveTab(i);
      });
    }
  }
  //  ---------------------------------


  //  Открывает информацию о тренере по клику и нажатию на 'Enter'
  const DESKTOP_WIDTH = 1200;
  const trainerCard = document.querySelectorAll('.trainer-card');

  const showTrainerInfo = (element, className) => {
    trainerCard.forEach((el) => el.classList.remove('is-show'));
    element.classList.add(className);
  };

  const setTrainerInfo = (element) => {
    if (window.innerWidth < DESKTOP_WIDTH) {
      if (element.classList.contains('is-show')) {
        element.classList.remove('is-show');
      } else {
        showTrainerInfo(element, 'is-show');
      }
    }
  };

  if (trainerCard.length > 0) {
    trainerCard.forEach((element) => {
      element.addEventListener('click', () => {
        setTrainerInfo(element);
      });

      element.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          setTrainerInfo(element);
        }
      });
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
