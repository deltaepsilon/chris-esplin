import gtag from './gtag';
import gtagSet from './gtag-set';

export default function gtagPageview(trackingId) {
  gtag('js', new Date());

  gtag('config', trackingId, { page_path: location.pathname, cookie_domain: location.hostname });
}
