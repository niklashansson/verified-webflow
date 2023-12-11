import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const noticeBanner = queryElement('[notice-element="component"]');
  const noticeBannerClose = queryElement('[notice-element="close"]');
  if (!noticeBanner || !noticeBannerClose) return;

  const seenNotice = sessionStorage.getItem('seenNotice');

  if (seenNotice !== 'true') {
    noticeBanner.style.display = 'block';
  }

  noticeBannerClose.addEventListener('click', () => {
    noticeBanner.style.display = 'none';
    sessionStorage.setItem('seenNotice', 'true');
  });
});
