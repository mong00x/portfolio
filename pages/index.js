import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { 
  ChakraProvider, 
  Box, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Image,
  Flex
} from "@chakra-ui/react";

import Script from "next/script";

import Data from "../data.json";

import dynamic from "next/dynamic";
const Project = dynamic(() => import("../components/Project.js"));

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme("light");
    
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <Head>
      <title>Meng Yuan</title>
      <meta name="description" content="mengyuan.dev" />
      <link rel="icon" href="/favicon.ico" />
      
    </Head>

      <div data-theme={theme}>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>


      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>



        <nav className={styles.nav}>
          <div className={styles.container}>

            {/* <button
              className={styles.brand}
              onClick={() => (window.location.href = "#")}
            >
              Meng Yuan
            </button> */}
            {/* <div className={styles.navBtnGroup}></div> */}
            <div className={styles.navBtnContainer}>
           
             
              <button className={styles.navBtn} onClick={switchTheme}>
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
          <section className={styles.hero} >
            
              <Box className={styles.container} >
                <div className={styles.greetings}>
                  <div className={(styles.flex, styles.title)} >
                    <h1 className={styles.meng}>
                      Hi! <div className={styles.linebreaker}></div>I'm Meng
                    </h1>
                    {/* make it pop with motion */}
                    
                    <h1 className={styles.emoji}>👋</h1>
                  </div>
                  <p className={styles.intro}>
                  As a Web Developer and occasional UI/UX Designer, 
                  I find joy in creating dynamic, interactive digital experiences, 
                  while maintaining a relaxed and innovative approach to my work.
                  </p>
                </div>
              </Box>
              <Box className={styles.herobg} filter='auto'  brightness={theme === "light" ? "25%" : "50%"} invert={theme === "light" ? "" : "0"}>
            </Box>
          </section>
          <ChakraProvider>
          <section id="projects" className={styles.projects}>
            <div className={styles.container}>
              <h2>Projects</h2>
              <div className={styles.grid}>
                {Data.projects.map((project) => (
                  <Project key={project.id} data={project} theme={theme}/>
                ))}
              </div>
            </div>
          </section>
          </ChakraProvider>

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
        
        <footer className={styles.footer}>
          
        <svg 
        opacity={theme === "light" ? "0.8" : "0.3"}
        
        className={styles.footerBorder} 
        _ngcontent-ced-c18="" 
        aria-hidden="true" 
        width="100%" 
        height="8" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <pattern 
          _ngcontent-ced-c18="" 
          id="a" 
          width="91" 
          height="8" 
          patternUnits="userSpaceOnUse">
            <g _ngcontent-ced-c18="" clipPath="url(#clip0_2426_11367)">
              <path _ngcontent-ced-c18="" 
              d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" 
              stroke={theme === "light" ? "#E1E3E1" : "#A1A3A1"}
              strokeLinecap="square">
                </path></g></pattern><rect _ngcontent-ced-c18="" width="100%" height="100%" fill="url(#a)"></rect>
        </svg>
            <div className={styles.container}>
              <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                  <p>
                    ✨ Created by Meng Yuan © { new Date().getFullYear()}
                  </p>
                </div>
                <div className={styles.footerRight}>
                  <a className={styles.linkedin} href="
                    https://www.linkedin.com/in/meng-yuan-0a530b1b0/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                
                  <a className={styles.github} href="https://github.com/mong00x">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a className={styles.devpost} href="https://devpost.com/mong00x?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
                    Devpost
                  </a>
                  <Popover placement="auto">
                    <PopoverTrigger>
                    <button className={styles.qrBtn}>
                      <ion-icon name="qr-code-outline"></ion-icon>
                    </button>
                    </PopoverTrigger>
                    <PopoverContent  mr="4px" p="12px" gap="12px" bg={theme === "light" ? "white" : "black"} borderRadius={12} color={theme === "light" ? "#0f2b33" : "#f8f8f8"} >
                      <Flex flexDir="row-reverse" gap="24px" w="100%" justifyContent="space-between">
                        <PopoverCloseButton borderRadius="12px"  fontSize="1rem" w="2.5rem" h="2.5rem" alignSelf="flex-end"/>
                        <PopoverHeader fontSize="20px">Check it on your phone</PopoverHeader>
                      </Flex>
                      <Image src="/qrcode.png" alt="qrcode" w="70vw" maxW="360px" m="auto"/>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </footer>

      </div>
      
    </>
  );
}
