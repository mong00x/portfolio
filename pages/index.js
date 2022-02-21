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
                <p>A React To-Do application with a landing page of it</p>
                <div className={styles.skilksWrapper}>
                  <ion-icon name="logo-html5"></ion-icon>
                  <p>HTML5</p>

                  <ion-icon name="logo-css3"></ion-icon>
                  <p>CSS3</p>

                  <ion-icon name="logo-javascript"></ion-icon>
                  <p>Vanilla JS</p>

                  <ion-icon name="logo-react"></ion-icon>
                  <p>React</p>

                  <ion-icon name="logo-bitbucket"></ion-icon>
                  <p>Bitbucket</p>
                </div>
              </div>
              <div className={styles.project2}>
                <button>
                  <img src="/FoodKeeper.png" alt="Epic To-Do" />
                </button>
                <p>
                  A React Native mobile application for better food management
                </p>
                <div className={styles.skilksWrapper}>
                  <ion-icon name="logo-react"></ion-icon>
                  <p>React Native</p>
                  <ion-icon name="logo-firebase"></ion-icon>
                  <p>Firebase</p>
                  <svg
                    className={styles.expoIcon}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512  512"
                  >
                    <title>Logo Expo</title>
                    <path d="M365.9082336,248.5854492c34.2052002,2.3467102,61.6148682-19.7375793,68.6870728-50.1881409c-12.3980713-17.5686798-38.4007263-25.9117737-61.3349304-11.3552094C352.6391907,201.6428375,347.0135193,227.1673279,365.9082336,248.5854492z M273.3049316,10.7320032l-123.79422,68.3732529l28.6268005,15.0189133L301.8263245,25.960928L273.3049316,10.7320032z M155.8431091,198.7901917L276.7849426,474.769043l32.2889099,19.8341064L173.8461609,102.9160767l-32.211441-17.2691956L12.869606,328.6029968l23.4977913,13.1870422L147.365036,197.7696533C149.7934418,195.0509644,153.8549042,194.9626617,155.8431091,198.7901917z M371.8318176,264.4114685c-35.1719666-19.3618011-35.1719971-68.029129,0-87.3909454s79.3757019,4.9718628,79.3757019,43.6954803S407.0038147,283.7732849,371.8318176,264.4114685z M411.7871094,300.8228149c0,0,45.0594177,131.3694153,45.0594177,131.3694153L319.2476196,512c0,0-50.638855-31.4296875-50.638855-31.4296875l-90.680481-206.7342834L37.6093445,352.8883057c0,0-37.6093445-21.1496887-37.6093445-21.1496887L136.0769653,75.7921677c0,0,137.0354004-75.7921677,137.0354004-75.7921677L315.81604,22.9367638l43.2412109,126.422226C275.4977417,195.4290466,317.491333,312.2324219,411.7871094,300.8228149z" />
                  </svg>

                  <p>Vanilla JS</p>
                </div>
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
