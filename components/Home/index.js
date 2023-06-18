import styles from './styles.module.css';
import Recruit from '../Recruit';
import MessageBoard from '../MessageBoard';
import News from '../News';

const Home = () => {
  return (
    <main className={styles.main}>
      <Recruit />
      <MessageBoard />
      <News />
    </main>
  )
}

export default Home;
