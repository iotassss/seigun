import Image from 'next/image';
import styles from './styles.module.css';

const HeaderAvatar = () => (
  <div className={styles.avatar}>
    <Image src="http://localhost:3000/avatar.png" alt="avatar" width={60} height={60} className={styles.img} />
  </div>
);

export default HeaderAvatar;
