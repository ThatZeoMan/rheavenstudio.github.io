import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import React from 'react';
import  { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
        <Head>
          <meta property="og:description"/>
          <meta property="og:image" content="https://rheavenstudio.github.io/img/HSBanner.png"/>
        </Head>
        <Redirect to='/docs/intro' />
    </Layout>
  );
}