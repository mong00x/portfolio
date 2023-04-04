import React, { useState, useEffect } from "react";

import styles from "../styles/Project.module.css";
import { motion, Variants } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const repoRedirect = (repo) => {
  window.open(repo, "").focus();
};
const demoRedirect = (demo) => {
  window.open(demo, "").focus();
};

const Project = ({key, data}) => {
  return (
    <motion.div 
      key={key}
      className={styles.project}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <button onClick={() => demoRedirect(data.demo)}>
        <img
          className={styles.projectcover}
          src={data.cover}
          alt={data.name}
        />
      </button>

      <div className={styles.contextcontainer}>
        <div className={styles.context}>
          <div className={styles.contextheader}>
            <h3>{data.name}</h3>
            <div className={styles.contextbtngroup}>
              <button onClick={() => repoRedirect(data.repo)}>
                {data.repo.match(/bitbucket/g) ? (
                  <ion-icon name="logo-bitbucket"></ion-icon>
                ) : (
                  <ion-icon name="logo-github"></ion-icon>
                )}
              </button>
            </div>
          </div>
          <p className={styles.contextbody}>{data.description}</p>
        </div>
        <div className={styles.projectfooter}>
          <p
            style={{
              margin: "0px",
              color: "var(--dark-light-color)",
              fontWeight: "bold",
            }}
          >
            {data.year}
          </p>
          <div className={styles.stacksWrapper}>
            {data.stacks.map((stack) => (
              <div>
                {stack.icontype === "ionic" ? (
                  <ion-icon name={stack.icon}></ion-icon>
                ) : stack.icontype === "RN" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon s-ion-icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo React</title>
                    <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"></path>
                    <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"></path>
                  </svg>
                ) : stack.icontype === "bootstrap" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-10 -10 280 280"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Bootstrap</title>
                    <g>
                      <path
                        d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
                        fill="var(--project-color)"
                      />
                      <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" />
                    </g>
                  </svg>
                ) : stack.icontype === "azure" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256px"
                    height="242px"
                    viewBox="0 0 256 242"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Azure</title>
                    <g>
                      <path d="M85.3432536,0.00290931225 L161.095926,0.00290931225 L82.4572158,233.000999 C80.7999506,237.910266 76.1963409,241.216897 71.0148908,241.216897 L12.0605874,241.216897 C8.17631708,241.216897 4.52963465,239.346777 2.26398956,236.191716 C-0.00165554136,233.036655 -0.608845705,228.983428 0.632808896,225.302959 L73.8980192,8.2188071 C75.5546242,3.30737742 80.1599649,0 85.3432536,0 L85.3432536,0.00290931225 Z" />
                      <path d="M195.422901,156.282432 L75.2973984,156.282432 C73.0119231,156.279908 70.9577304,157.676287 70.1192383,159.802395 C69.2807461,161.928503 69.8287946,164.351151 71.5007459,165.909349 L148.690618,237.955558 C150.937998,240.051977 153.897138,241.216897 156.970521,241.216897 L224.990241,241.216897 L195.422901,156.282432 Z" />
                      <path d="M85.3432536,0.00282026831 C80.0982223,-0.017218565 75.4499031,3.37677358 73.8718354,8.37881927 L0.722997576,225.105126 C-0.602635687,228.800183 -0.0443562611,232.909431 2.21904685,236.116884 C4.48244996,239.324337 8.16695154,241.227505 12.0925898,241.216941 L72.5684635,241.216941 C77.154039,240.397586 80.9441027,237.174364 82.4892183,232.779891 L97.0765099,189.788984 L149.182292,238.389046 C151.365814,240.195147 154.104928,241.193803 156.938519,241.216941 L224.705129,241.216941 L194.983595,156.282435 L108.341367,156.3028 L161.369401,0.00282026831 L85.3432536,0.00282026831 Z" />
                      <path d="M182.098251,8.20716985 C180.443985,3.30365177 175.845517,0.00290931225 170.670472,0.00290931225 L86.2451404,0.00290931225 C91.4198966,0.00290931225 96.0178956,3.30421162 97.6729189,8.20716985 L170.941039,225.30005 C172.18363,228.981191 171.576996,233.035501 169.311351,236.191716 C167.045705,239.34793 163.398467,241.219806 159.51326,241.219806 L243.941501,241.219806 C247.826196,241.219806 251.472566,239.346605 253.737531,236.190534 C256.002496,233.034464 256.608798,228.980705 255.366371,225.30005 L182.098251,8.20716985 Z" />
                    </g>
                  </svg>
                ) : stack.icontype === "tailwind" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256px"
                    height="154px"
                    viewBox="0 0 256 154"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Tailwind CSS</title>
                    <g>
                      <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" />
                    </g>
                  </svg>
                ) : stack.icontype === "heroku" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256px"
                    height="285px"
                    viewBox="-15 -15 286 315"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Heroku</title>
                    <g>
                      <path d="M230.4,0 C244.39552,0 255.77047,11.2315104 255.99657,25.1765997 L256,25.6 L256,258.844444 C256,272.839964 244.765005,284.214915 230.823296,284.441014 L230.4,284.444444 L25.6,284.444444 C11.60448,284.444444 0.2295296,273.209449 0.003430144,259.26774 L0,258.844444 L0,25.6 C0,11.60096 11.2349952,0.2294592 25.1767043,0.003429088 L25.6,0 L230.4,0 Z M230.4,14.2222222 L25.6,14.2222222 C19.426,14.2222222 14.3820625,19.169691 14.2259468,25.3068692 L14.2222222,25.6 L14.2222222,258.844444 C14.2222222,265.018444 19.169691,270.062382 25.3068692,270.218498 L25.6,270.222222 L230.4,270.222222 C236.5775,270.222222 241.618047,265.274753 241.774056,259.137575 L241.777778,258.844444 L241.777778,25.6 C241.777778,19.328 236.675556,14.2222222 230.4,14.2222222 Z M64,184.888889 L96,213.333333 L64,241.777778 L64,184.888889 Z M92.4444444,42.6666667 L92.4444444,123.416889 C106.645333,118.794667 126.496,113.777778 145.777778,113.777778 C163.36,113.777778 173.884444,120.689778 179.616,126.488889 C191.7248,138.738489 192.013158,154.309103 191.997015,156.385666 L191.996444,156.444444 L192,241.777778 L163.555556,241.777778 L163.555556,156.835556 C163.416889,150.197333 160.216889,142.222222 145.777778,142.222222 C117.146098,142.222222 85.0644658,156.478539 84.1117507,156.905113 L84.0924444,156.913778 L64,166.016 L64,42.6666667 L92.4444444,42.6666667 Z M192,42.6666667 C190.08,58.8231111 183.530667,74.3111111 170.666667,88.8888889 L170.666667,88.8888889 L142.222222,88.8888889 C153.400889,74.2222222 160.419556,58.7875556 163.555556,42.6666667 L163.555556,42.6666667 Z" />
                    </g>
                  </svg>
                ) : stack.icontype === "expo" ? (
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
                ) : stack.icontype === "PHP" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <title>Logo PHP</title>
                    <path d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"/></svg>
                ): stack.icontype === "MySql" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <title>Logo MySQL</title>
                    <path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z"/></svg>                ) : (
                  ""
                )}
                {/* <p>{stack.name}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
