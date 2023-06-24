import styles from './styles.module.css';
import Recruit from '../Recruit';
import ImportantNotice from '../ImportantNotice';
import News from '../News';

const Home = ({ articles }) => {
  return (
    <main className={styles.main}>
      <Recruit />
      <ImportantNotice />
      <News articles={articles}/>
    </main>
  )
}

export default Home;
