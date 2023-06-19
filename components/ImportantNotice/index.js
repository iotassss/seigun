import styles from './styles.module.css';

const ImportantNotice = () => {
  return (
    <div className={styles.background}>
      <h2 className={styles.title}>
        重要なお知らせ
      </h2>
      <h3>
        挙兵について
      </h3>
      <p>
        謀反の疑いがある徳川家康に対し、挙兵を行いました。
      </p>
    </div>
  );
}

export default ImportantNotice;
