import React from 'react';
import Head from 'next/head';

export default ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#177f62" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/static/images/favicon.png"></link>
    </Head>
  );
};
