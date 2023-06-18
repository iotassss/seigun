import styles from './styles.module.css';
import Recruit from '../Recruit';
import News from '../News';

const Home = () => {
  return (
    <main className={styles.main}>
      <Recruit />
      <News />
    </main>
  )
}

export default Home;
