import Image from 'next/image';
import styles from './styles.module.css';
import { useSession, signIn, signOut } from "next-auth/react";

const NavAvatar = () => {
  const { data: session } = useSession();
  return (
    session
      ?
      <>
        <Image src={session.user.image} alt="avatar" width={60} height={60} className={styles.img} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
      :
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
  );
};

export default NavAvatar;
