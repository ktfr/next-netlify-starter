import styles from "./Hero.module.css";

export default function Hero({ title, description, imageUrl }) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <img
        src={imageUrl}
        alt={title}
        className={styles.heroImage}
      />

      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
