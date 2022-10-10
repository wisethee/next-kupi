import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

import { fetchCoffeeStores } from '../../lib/coffee-stores';

import styles from '../../styles/store.module.scss';

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStore: coffeeStores.find(
        (store) => store.id.toLocaleString() === id
      ),
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchCoffeeStores();

  const paths = data.map((shop) => ({
    params: { id: `${shop.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

const CoffeeStore = (props) => {
  const { name, imgUrl, address, locality } = props.coffeeStore;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleUpvoteButton = () => {
    return;
  };

  return (
    <Fragment>
      <Head>
        <title>{name}</title>
        <meta property="og:title" content={name} key="title" />
      </Head>

      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.backToHomeLink}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>

            <div className={styles.nameWrapper}>
              <h1 className={styles.name}>{name}</h1>
            </div>

            <Image
              className={styles.storeImg}
              src={imgUrl}
              width="600px"
              height="360px"
              alt={`${name}`}
            />
          </div>

          <div className={classNames(styles.col2, 'glass')}>
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/places.svg"
                width="24px"
                height="24px"
                alt={`${name} Image`}
              />
              <p className={styles.text}>{address}</p>
            </div>

            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/nearMe.svg"
                width="24px"
                height="24px"
                alt={`${name} Image`}
              />
              <p className={styles.text}>{locality}</p>
            </div>

            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/star.svg"
                width="24px"
                height="24px"
                alt={`${name} Image`}
              />
              <p className={styles.text}>112</p>
            </div>
            <button
              className={styles.upvoteButton}
              onClick={handleUpvoteButton}
            >
              Up vote!
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoffeeStore;
