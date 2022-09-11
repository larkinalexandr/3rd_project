export const removeNoJs = () => {
  const wrapper = document.querySelector('[data-element="wrapper"]');

  if (wrapper) {
    wrapper.classList.remove('no-js');
  }
};
