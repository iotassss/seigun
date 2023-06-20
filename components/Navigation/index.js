import Link from 'next/link';
import styles from './styles.module.css';
import NavAvatar from '../NavAvatar/index.js';
import { FaHome } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const Navigation = ({setPanel}) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navlist}>
        <li>
          <h1 onClick={() => setPanel(0)} className={styles.title}>
            <img src="/images/seigun-logo.png" alt="西軍" className={styles.logo} />
          </h1>
        </li>
        <li>
          <button onClick={() => setPanel(0)} className={styles.button}>
            <FaHome className={styles.icon} />
            Home
          </button>
        </li>
        <li>
          <button onClick={() => setPanel(1)} className={styles.button}>
            <FaComment className={styles.icon} />
            Chat
          </button>
        </li>
        <li>
        <NavAvatar setPanel={setPanel} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation
