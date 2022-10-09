import Image from 'next/image';
import Banner from '../components/banner/banner';
import Card from '../components/card/card';

import coffeeStores from '../coffee-stores.json';

import styles from '../styles/home.module.scss';
import { Fragment } from 'react';

export const getStaticProps = async (context) => {
  return {
    props: { coffeeStores },
  };
};

export function Index(props) {
  const handleOnBannerButton = () => console.log('banner button clicker');

  console.log('marius changes');

  const a = 10;
  console.log(a);

  return (
    <div className="container">
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerButton}
      />
      <div className={styles.heroImage}>
        <Image
          src="/static/hero-image.png"
          alt="hero"
          width="700"
          height="400"
        />
      </div>

      {coffeeStores.length > 0 && (
        <Fragment>
          <h2 className={styles.heading2}>Coffee Stores</h2>
        </Fragment>
      )}
      <div className={styles.cardLayout}>
        {props.coffeeStores.map((store) => {
          const { id, imgUrl, name } = store;
          return (
            <Card
              key={id}
              href={`coffee-store/${id}`}
              imgUrl={imgUrl}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
