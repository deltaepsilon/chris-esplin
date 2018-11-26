import React from 'react';
import AppShell from '../components/app-shell/app-shell';
import ChrisHeartsCode from '../components/landing-pages/chris-hearts-code';
import StructuredData from '../components/head/structured-data';

const structuredData = {
  '@type': 'WebSite',
  '@id': 'https://www.chrisesplin.com/#website',
  url: 'https://www.chrisesplin.com/',
  name: 'ChrisEsplin.com',
  about: {
    '@type': 'Organization',
    brand: {
      '@type': 'Brand',
      name: 'Chris Esplin',
      description:
        'Chris Esplin is a software engineer with a special love of web technologies and Firebase. Chris runs Calligraphy.org and a consulting business.',
      logo:
        'https://firebasestorage.googleapis.com/v0/b/chris-esplin.appspot.com/o/assets%2Fassets%2Foptimized%2Fquiver-logo.jpg?alt=media&token=35047c21-64d1-4f7f-93c1-db25d894e259',
      url: 'https://www.chrisesplin.com',
    },
    email: 'chris@chrisesplin.com',
    founder: {
      '@type': 'Person',
      email: 'chris@chrisesplin.com',
      givenName: 'Chris',
      familyName: 'Esplin',
    },
    legalName: 'Quiver Inc',
  },
};

export default function() {
  return (
    <AppShell>
      <StructuredData data={structuredData} />
      <ChrisHeartsCode />
    </AppShell>
  );
}
