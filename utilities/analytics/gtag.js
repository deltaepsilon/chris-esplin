/* globals window */
import { LOCALSTORAGE_DEBUG_NAME } from '../../datastore/index';

export default function gtag() {
  window.dataLayer = window.dataLayer || [];

  const debug = localStorage.getItem(LOCALSTORAGE_DEBUG_NAME);

  if (debug == 'true') {
    console.info('GTAG:', [...arguments]);
  }

  dataLayer.push(arguments);
}
