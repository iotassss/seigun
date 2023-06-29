import styles from './styles.module.css';

const ImportantNotice = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          重要なお知らせ
        </h2>
        <div className={styles.notice}>
          <div className={styles.date}>1600年7月19日</div>
          <h3>
            挙兵について
          </h3>
          <p>
            太閤様の御遺命に背き謀反を企てているとして、徳川家康に対して討伐命令が下されました。これを受けて毛利輝元様を総大将として家康討伐軍(西軍)を編成いたしました。詳しくはこちらをご覧ください。
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImportantNotice;
