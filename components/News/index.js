import styles from "./styles.module.css";
import { useState } from "react";

const News = ({ articles }) => {
  const [newsList, setNewsList] = useState(articles);

  return (
    <>
      <h2 className={styles.title}>
        News
      </h2>
      <article className={styles.article}>
        {newsList.map((news) => (
          <section className={styles.section} key={news.id}>
            <a href={news.url} target="_blank">
              <picture>
                <img src={news.img} alt={news.title} className={styles.img} />
              </picture>
              <div className={styles.text}>
                <h3>
                  {news.title}
                </h3>
              </div>
            </a>
          </section>
        ))}
      </article>
    </>
  );
};

export default News;
