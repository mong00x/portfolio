import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto&display=swap"
        rel="stylesheet"
      />

      <Head>
        <title>Mong00x</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <button className={styles.brand}>Meng Yuan</button>
        <div className={styles.navBtnGroup}>
          <button className={styles.navBtn}>Projects</button>
          <button className={styles.navBtn}>About</button>
          <button className={styles.navBtn}>Contact</button>
          <div className={styles.cvContainer}>
            <button className={styles.cv}>CV</button>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <article className={styles.article1}>
          <div className={styles.greetings}>
            <div className={(styles.flex, styles.title)}>
              <h1>Hi! I'm&nbsp;</h1>
              <h1 className={styles.meng}>Meng 👋</h1>
            </div>
            <p className={styles.intro}>
              I'm a frontend developer and UI/UX designer(sometimes) with a
              passion for delivering interactive and amazing digital experiences
              across platforms.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
