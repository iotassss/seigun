import styles from './styles.module.css';
import { FaSignInAlt } from 'react-icons/fa';

const Recruit = () => {
  return (
    <div className={styles.recruit}>
      <picture>
        <source media="(max-width: 480px)" srcSet="/images/recruit01_sp.jpg" />
        <img src="/images/recruit01.jpg" alt="recruit01" className={styles.recruitImg} />
      </picture>
      <div className={styles.recruitPanelcontainer}>
        <div className={styles.recruitPanel}>
          <p>
            西軍は豊臣家を支える<span>唯一の正規軍</span>です。あなたも西軍に参加して、豊臣家を支えませんか？
          </p>
          <button className={styles.recruitBtn}>
            ログインして参戦
            <span className={styles.signInIcon}>
              <FaSignInAlt />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
