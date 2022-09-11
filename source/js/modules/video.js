export const findVideos = () => {
  const videos = document.querySelectorAll('[data-element="video"]');

  if (videos.length > 0) {
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
};

function setupVideo(video) {
  const button = video.querySelectorAll('[data-element="video--link-button"]');

  if (button.length > 0) {
    const href = button[0].href;

    const startVideo = (evt) => {
      const iframe = createIframe(href);
      evt.preventDefault();
      button[0].remove();
      video.classList.add('is-playing');
      video.appendChild(iframe);
    };

    button[0].addEventListener('click', (evt) => {
      startVideo(evt);
    });

    button[0].addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        startVideo(evt);
      }
    });

    button[0].removeAttribute('href');
  }
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
