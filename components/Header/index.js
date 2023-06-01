import Link from 'next/link';
import styles from './styles.module.css';
import HeaderAvatar from '../HeaderAvatar/index.js'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link href="/">
        Next.js
      </Link>
    </h1>
    <nav>
      <ul className={styles.navlist}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <HeaderAvatar />
  </header>
);

export default Header
