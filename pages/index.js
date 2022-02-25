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
            <div className={styles.grid}>
              {Data.projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
