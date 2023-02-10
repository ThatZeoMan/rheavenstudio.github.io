import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import React from 'react';
import  { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
        <Head>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://rheavenstudio.github.io/"/>
          <meta property="og:description" content="Heaven Studio is a (WIP) Rhythm Heaven level editor made in Unity."/>
          <meta property="og:image" content="https://raw.githubusercontent.com/RHeavenStudio/rheavenstudio.github.io/main/static/img/HSBanner.png"/>


          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://rheavenstudio.github.io/"/>
          <meta property="twitter:description" content="Heaven Studio is a (WIP) Rhythm Heaven level editor made in Unity."/>
          <meta property="twitter:image" content="https://raw.githubusercontent.com/RHeavenStudio/rheavenstudio.github.io/main/static/img/HSBanner.png"/>
        </Head>
        <Redirect to='/docs/intro' />
    </Layout>
  );
}