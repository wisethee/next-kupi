import Image from 'next/image';
import Banner from '../components/banner/banner';
import Card from '../components/card/card';

import styles from '../styles/home.module.scss';

export function Index() {
  const handleOnBannerButton = () => console.log('banner button clicker');

  return (
    <div className="container">
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerButton}
      />
      <div className={styles.heroImage}>
        <Image src="/hero.svg" alt="hero" width="300%" height="300%" />
      </div>
      <div className={styles.cardLayout}>
        <Card
          name="Dark Horse Coffee"
          href="coffee-store/1"
          imgUrl="/background.png"
        />
        <Card
          name="Dark Horse Coffee"
          href="coffee-store/1"
          imgUrl="/background.png"
        />
        <Card
          name="Dark Horse Coffee"
          href="coffee-store/1"
          imgUrl="/background.png"
        />
      </div>
    </div>
  );
}

export default Index;
