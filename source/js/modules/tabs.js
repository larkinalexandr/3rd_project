export const showTabs = () => {
  const tabTitle = document.querySelectorAll('[data-element="tabs-title-list"] button');
  const tabContent = document.querySelectorAll('[data-element="tabs-content"] ul');

  if (tabTitle.length > 0 && tabContent.length > 0) {
    const setActiveTab = (index) => {
      tabTitle.forEach((element) => element.classList.remove('is-active'));
      tabContent.forEach((element) => element.classList.remove('is-active'));
      tabTitle[index].classList.add('is-active');
      tabContent[index].classList.add('is-active');
    };

    for (let i = 0; i < tabTitle.length; i++) {
      tabTitle[i].addEventListener('click', () => {
        setActiveTab(i);
      });
    }
  }
};
