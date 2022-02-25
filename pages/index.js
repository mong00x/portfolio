import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useLocalStorage from "use-local-storage";
import React from "react";

import Data from "../data.json";

import dynamic from "next/dynamic";
const Project = dynamic(() => import("../components/Project.js"));

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      console.log(defaultTheme);
      setTheme(defaultTheme);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto&display=swap');
      </style>

      <Head>
        <title>Mong00x</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.navBtnContainer}>
          <button
            className={styles.brand}
            onClick={() => (window.location.href = "/")}
          >
            Meng Yuan
          </button>
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
          <div className={styles.themeBtnContainer}>
            <button className={styles.themeBtn} onClick={switchTheme}>
              {theme === "light" ? (
                <ion-icon name="sunny"></ion-icon>
              ) : (
                <ion-icon name="moon"></ion-icon>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.greetings}>
              <div className={(styles.flex, styles.title)}>
                <h1 className={styles.meng}>Hi! I'm Meng</h1>
                <h1>👋</h1>
              </div>
              <p className={styles.intro}>
                I'm an aspiring frontend developer and UI/UX designer(sometimes)
                with a passion for delivering interactive and amazing digital
                experiences across platforms.
              </p>
            </div>
          </div>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.svg}
        >
          <path
            fill-opacity="1"
            d="M0,224L80,218.7C160,213,320,203,480,176C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className={styles.container}>
          <section className={styles.Projects}>
            <h2>Projects</h2>
            <div id="root" className={styles.grid}>
              {Data.projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>

            {/* <motion.div
              className={(styles.grid, styles.projectcontainer)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className={styles.project} variants={cardVariants}> */}
            {/* <button>
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
              </motion.div>
              <motion.div className={styles.project2} variants={cardVariants}>
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
                    <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"></path>
                  </svg>
                  <p>React Native</p>

                  <ion-icon name="logo-firebase"></ion-icon>
                  <p>Firebase</p>
                  <svg
                    className={styles.expoIcon}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 231"
                  >
                    <title>Logo Expo</title>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M121.309004,84.6732585 C123.402504,81.5874152 125.694292,81.1950171 127.553451,81.1950171 C129.41261,81.1950171 132.509843,81.5874152 134.604162,84.6732585 C151.106348,107.339593 178.345607,152.492 198.439108,185.798721 C211.542532,207.519499 221.6069,224.201947 223.671721,226.324944 C231.422996,234.294992 242.053551,229.327949 248.230809,220.287799 C254.312201,211.387762 256.000111,205.138399 256.000111,198.471155 C256.000111,193.930186 167.895315,30.0714244 159.022317,16.4322117 C150.48936,3.31359639 147.710044,0 133.105527,0 L122.176721,0 C107.615631,0 105.511479,3.31359639 96.9777022,16.4322117 C88.1055238,30.0714244 0.0001105152,193.930186 0.0001105152,198.471155 C0.0001105152,205.138399 1.68839227,211.387762 7.76991495,220.287799 C13.9471241,229.327949 24.5775965,234.294992 32.3286259,226.324944 C34.3936934,224.201947 44.4580605,207.519499 57.5616485,185.798721 C77.654822,152.492 104.806818,107.339593 121.309004,84.6732585 Z"
                    />
                  </svg>
                  <p>Expo</p>
                  <ion-icon name="happy"></ion-icon>
                  <p>M3O Emoji API</p>
                </div>
              </motion.div>
              <motion.div className={styles.project3} variants={cardVariants}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button>
              </motion.div>
              <motion.div className={styles.project4} variants={cardVariants}>
                <button>
                  <img src="/EpicTodo.png" alt="Epic To-Do" />
                </button> */}
            {/* </motion.div>
            </motion.div> */}
          </section>
        </div>
      </main>
    </div>
  );
}
