import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
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
          <div className={styles.navBtn}>
            <button>Projects</button>
          </div>
          <div className={styles.navBtn}>
            <button>About</button>
          </div>
          <div className={styles.navBtn}>
            <button>Contact</button>
          </div>
        </div>
        <div className={styles.placeHolder}></div>
        <div className={styles.themeBtnContainer}>
          <button className={styles.themeBtn}>
            <ion-icon name="moon-outline"></ion-icon>
          </button>
        </div>
      </nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.greetings}>
              <div className={(styles.flex, styles.title)}>
                <h1 className={styles.meng}>Hi! I'm Meng</h1>
                <h1>👋</h1>
              </div>
              <p className={styles.intro}>
                I'm a frontend developer and UI/UX designer(sometimes) with a
                passion for delivering interactive and amazing digital
                experiences across platforms.
              </p>
            </div>
          </section>
          <section className={styles.project}>
            <h2>Projects</h2>
            <div className={styles.grid}>
              <div className={styles.project1}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button>
                <h6>epic todo</h6>
              </div>
              <div className={styles.project2}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button>
              </div>
              <div className={styles.project3}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button>
              </div>
              <div className={styles.project4}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
