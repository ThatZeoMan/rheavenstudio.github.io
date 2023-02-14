import React from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import Giscus from '@giscus/react';

export default function PaginatorWrapper(props) {
  return (
    <>
      <Paginator {...props} />
      <br/>
      <Giscus
          id="comments"
          repo="RHeavenStudio/rheavenstudio.github.io.comments"
          repoId="R_kgDOI8b2UA"
          category="Announcements"
          categoryId="DIC_kwDOI8b2UM4CUNue"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme="transparent_dark"
          lang="en"
          loading="lazy"
        />
    </>
  );
}
