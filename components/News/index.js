import Link from "next/link";
import styles from "./styles.module.css";

const News = () => {
  return (
    <>
      <h2 className={styles.title}>
        News
      </h2>
      <article className={styles.article}>
        <section className={styles.section}>
          <picture>
            <img src="/images/sekigahara.jpg" alt="sekigahara" className={styles.img} />
          </picture>
          <div className={styles.text}>
            <h3>
              関ヶ原の戦いの解説
            </h3>
          </div>
        </section>
        <section className={styles.section}>
          <picture>
            <img src="/images/sekigahara.jpg" alt="sekigahara" className={styles.img} />
          </picture>
          <div className={styles.text}>
            <h3>
              関ヶ原の戦いの解説
            </h3>
          </div>
        </section>
        <section className={styles.section}>
          <picture>
            <img src="/images/sekigahara.jpg" alt="sekigahara" className={styles.img} />
          </picture>
          <div className={styles.text}>
            <h3>
              関ヶ原の戦いの解説
            </h3>
          </div>
        </section>
        <section className={styles.section}>
          <picture>
            <img src="/images/sekigahara.jpg" alt="sekigahara" className={styles.img} />
          </picture>
          <div className={styles.text}>
            <h3>
              関ヶ原の戦いの解説
            </h3>
          </div>
        </section>
      </article>
    </>
  );
};

export default News;
