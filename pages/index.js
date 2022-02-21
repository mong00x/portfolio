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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon s-ion-icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo React Native</title>
                    <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"></path>
                    <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"></path>
                  </svg>
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
