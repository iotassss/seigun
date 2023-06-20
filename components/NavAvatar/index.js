import Image from 'next/image';
import styles from './styles.module.css';
import { useSession, signIn, signOut } from "next-auth/react";

const NavAvatar = ({ setPanel }) => {
  const { data: session } = useSession();

  return (
    session
      ?
      <>
        <Image
          src={session.user.image}
          alt="avatar"
          width={60}
          height={60}
          className={styles.img}
          onClick={() => setPanel(2)}
        />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </>
      :
      <>
        {/* Not signed in <br /> */}
        <Image
          src='/avatar.png'
          alt="avatar"
          width={50}
          height={50}
          className={styles.img}
          onClick={() => signIn()}
        />
      </>
  );
};

export default NavAvatar;
