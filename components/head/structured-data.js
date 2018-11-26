import React from 'react';
import Head from 'next/head';

export default ({ data }) => {
  data['@context'] = 'https://schema.org';

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};
