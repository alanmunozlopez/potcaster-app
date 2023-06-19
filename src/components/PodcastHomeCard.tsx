import styles from '@/styles/podcast-card.module.css';

const PodcastHomeCard = ({ id = '', image = '', name = '', author = '' }) => {
  return (
    <div className={styles.container}>
      <div role="podcast-home-card" className={styles.card}>
        <div>
          <figure>
            <img className={styles.img} src={image} />
          </figure>
        </div>
        <div className={styles.details}>
          <p className={styles.title}>{name}</p>
          <p className={styles.author}>Author: {author} </p>
        </div>
      </div>
    </div>
  );
};
export default PodcastHomeCard;
