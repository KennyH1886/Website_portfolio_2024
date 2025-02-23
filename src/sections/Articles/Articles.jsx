import styles from './ArticlesStyles.module.css';
import sandia from "../../assets/sandia.jpg";

function Articles() {
  const article = {
    title: "Sandia Welcomes Over 50 Interns from HBCUs",
    link: "https://www.sandia.gov/labnews/2024/12/19/sandia-welcomes-over-50-interns-from-hbcus/",
    description: "Kenny Howard and Josiah Moore present their AI-assisted project ATLAS at Sandia National Labs, helping engineers tackle complex processes with AI-driven insights.",
  };

  return (
    <section id="articles" className={styles.container}>
      <h1 className="sectionTitle">Featured Article</h1>
      <div className={styles.articlesGrid}>
        <div className={styles.articleCard}>
          <img src={sandia} alt="Kenny Howard at Sandia Labs" className={styles.largeImage} />
          <div className={styles.articleContent}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleDescription}>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
