import gtag from './gtag';

export default function gtagEvent(name, params = {}) {
  gtag('event', name, params);
}
