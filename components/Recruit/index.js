import styles from './styles.module.css';

const Recruit = () => {
  return (
    <div>
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/recruit01_sp.jpg" />
        <img src="/images/recruit01.jpg" alt="recruit01" className={styles.recruitImg} />
      </picture>
    </div>
  );
};

export default Recruit;
