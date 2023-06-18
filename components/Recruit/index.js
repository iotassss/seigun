import styles from './styles.module.css';

const Recruit = () => {
  return (
    <div>
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/recruit01_sp.jpg" />
        <img src="/images/recruit01.jpg" alt="recruit01" className={styles.recruitImg} />
      </picture>
      <div className={styles.recruitPanel}>
        <h1 className={styles.title}>
          西軍へようこそ
        </h1>
        <p>
          豊臣家を支える唯一の正規軍西軍は、あなたの力を必要としています。
        </p>
        <button className={styles.recruitBtn}>
          ログインして参戦する
        </button>
      </div>
    </div>
  );
};

export default Recruit;
