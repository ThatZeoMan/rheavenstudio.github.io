import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import React from 'react';
import  { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
        <Head>
          <meta property="og:description"/>
          <meta property="og:image:secure_url" content="https://rheavenstudio.github.io/img/HSBanner.png"/>
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="500"/>
        </Head>
        <Redirect to='/docs/intro' />
    </Layout>
  );
}