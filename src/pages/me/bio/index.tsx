import React from 'react';
import Head from 'next/head';
import { Bio } from '../../../contents/Bio';
import { GetStaticProps } from 'next';

export default function MyBio() {
  return (
    <React.Fragment>
      <Head>
        <title>Bio - oleandrosiq</title>
      </Head>
      <Bio />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 24 * 60 * 60,
  }
}