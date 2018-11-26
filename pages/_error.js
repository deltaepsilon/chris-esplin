import React from 'react';
import Link from 'next/link';
import AppShell from '../components/app-shell/app-shell';

export default function() {
  return (
    <AppShell>
      <div id="fourohfour">
        <div>
          <h2>Lost?</h2>
          <p>It happens.</p>
          <p>
            <span>Head over to the </span>

            <Link href="/">
              <a style={{ textDecoration: 'underline' }}>main page</a>
            </Link>
            <span> to return to civilization.</span>
          </p>
          <div style={{ width: '100%', height: '0', paddingBottom: '55%', position: 'relative' }}>
            <iframe
              src="https://giphy.com/embed/uNIE3IMmBMtmE"
              width="100%"
              height="100%"
              style={{ position: 'absolute' }}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
