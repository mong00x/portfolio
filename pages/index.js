import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=PT+Sans:wght@400;700&family=Roboto&display=swap');
      </style>

      <Head>
        <title>Mong00x</title>
        <meta name="description" content="Mong00x.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.navBtnContainer}>
          <button
            className={styles.brand}
            onClick={() => (window.location.href = "#")}
          >
            Meng Yuan
          </button>
          <div className={styles.navBtnGroup}>
            <div className={styles.navBtn}>
              <button onClick={() => (window.location.href = "#projects")}>
                Projects
              </button>
            </div>
            <div className={styles.navBtn}>
              <button onClick={() => (window.location.href = "#about")}>
                About
              </button>
            </div>
            <div className={styles.navBtn}>
              <button onClick={() => (window.location.href = "#contact")}>
                Contact
              </button>
            </div>
          </div>
          <div className={styles.themeBtnContainer}>
            <button className={styles.themeBtn} onClick={switchTheme}>
              {theme === "light" ? (
                <ion-icon name="sunny-outline"></ion-icon>
              ) : (
                <ion-icon name="moon-outline"></ion-icon>
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
                <h1 className={styles.meng}>
                  Hi! <div className={styles.linebreaker}></div>I'm Meng
                </h1>
                <h1 className={styles.emoji}>👋</h1>
              </div>
              <p className={styles.intro}>
                I'm an aspiring frontend developer and UI/UX designer(sometimes)
                with a passion for delivering interactive and amazing digital
                experiences across platforms.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.grid}>
              {Data.projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* <section id="about" className={styles.container}>
          <h2>About</h2>
          <div className={styles.about}>
            <div className={styles.aboutImg}>
            </div>
            <div className={styles.aboutText}>
              <p>
                I'm a frontend developer and UI/UX designer(sometimes) with a
                passion for delivering interactive and amazing digital
                experiences across platforms.
              </p>
              <p>
                I'm currently working as a frontend developer at{" "}
                <a href="https://www.mengyuan.com">Meng Yuan</a> and I'm
                currently working on{" "}
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
