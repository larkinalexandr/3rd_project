export const setupTrainerInfo = () => {
  const DESKTOP_WIDTH = 1200;
  const trainerCard = document.querySelectorAll('[data-element="trainer-card"]');

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
};
