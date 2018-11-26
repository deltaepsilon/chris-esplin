import React from 'react';
import gtagPageview from '../../utilities/analytics/gtag-pageview';
import debounce from '../../utilities/debounce';

export default class Pageview extends React.Component {
  constructor() {
    super();

    this.__gtagPageview = debounce(gtagPageview, 1000);
  }
  componentDidMount() {
    const {
      analytics: { trackingId },
    } = this.props.environment;

    this.__gtagPageview(trackingId);
  }

  componentDidUpdate(prevProps) {
    this.onChange('loaded', prevProps, loaded => {
      const { environment } = this.props;
      const trackingId = environment.analytics.trackingId;

      this.__gtagPageview(trackingId);
    });
  }

  onChange(propName, prevProps, fn) {
    if (prevProps[propName] != this.props[propName]) {
      fn(this.props[propName]);
    }
  }

  render() {
    return null;
  }
}

