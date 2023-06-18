import Link from 'next/link';
import styles from './styles.module.css';
import NavAvatar from '../NavAvatar/index.js'

const Navigation = ({setPanel}) => {


  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>
        <Link href="/">
          Next.js
        </Link>
      </h1>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <button onClick={() => setPanel(0)}>Home</button>
          </li>
          <li>
            <button onClick={() => setPanel(1)}>User</button>
          </li>
        </ul>
      </nav>
      <NavAvatar />
    </div>
  );
};

export default Navigation
