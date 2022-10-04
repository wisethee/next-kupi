import styles from './banner.module.scss';

type BannerProps = {
  buttonText: string;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Banner = ({ buttonText, handleOnClick }: BannerProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Kupi</span>{' '}
        <span className={styles.title2}>Coffee</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
