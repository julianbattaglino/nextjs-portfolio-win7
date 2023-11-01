import React from 'react';
import Head from 'next/head';
import { SlSocialLinkedin, SlSocialGithub, SlDoc } from "react-icons/sl";
import { ImFilePdf } from "react-icons/im";
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {

    return (
        <>
            <Head>
                <title>Juli4n B4tt4glin0 | Portfolio</title>
                <meta name="description" content="Julian Battaglino, Front End Developer - Portfolio personal" />

                <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

                {/* Open Graph meta tags */}
                <meta property="og:locale" content="es" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta property="og:description"
                    content="Julian Battaglino, Front End Developer - Portfolio personal" />
                <meta property="og:url" content="https://www.julianbattaglino.com.ar" />
                <meta property="og:site_name" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta property="og:image" content="/julian-battaglino-pic.webp" />

                {/* Twitter meta tags */}
                <meta name="twitter:title" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta name="twitter:description"
                    content="Julian Battaglino, Front End Developer - Portfolio personal" />
                <meta name="twitter:image" content="/julian-battaglino-pic.webp" />
                <meta property="twitter:url" content="https://www.julianbattaglino.com.ar" />

                <meta name="google-site-verification" content="B6v1kmJBHceOOGToEXrLdWYYTqe_WIMgaD2R9swZ4eY" />

            </Head>

            {/* Windows 7 Top Bar */}
            <div className="p-2">
                <div className="window active">
                    <div className="title-bar">
                        <div className="title-bar-text">C:\Home</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>

                    {/* Windows 7 Body Content */}
                    <div className="window-body has-space">
                        <div className="intro-container">
                            <h1 className="main-title pt-5" data-aos="zoom-in"><span className="underline-nice">Julian Battaglino</span></h1>
                            <h2 className="subtitle" data-aos="zoom-in">Front End Web Developer</h2>

                            {/*<div className="icon-container">
                                <Link href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                                    <SlSocialGithub className="icon mx-2" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/julianbattaglino/" target="_blank" rel="noreferrer" className="icon-link">
                                    <SlSocialLinkedin className="icon mx-2" />
                                </Link>
                                <Link href="/cv-julian-battaglino.pdf" target="_blank" rel="noreferrer" className="icon-link">
                                    <SlDoc className="icon mx-2" />
                                </Link>
                            </div>*/}

                            <img className="profile-img" src="/julian-battaglino-pic.webp" alt="Julian Battaglino - Front End Developer. Azul, Buenos Aires, Argentina." title="Julian Battaglino Avatar Pic" />
                            <p className="text-center font-bold pt-2">julian-battaglino.jpg</p>
                        </div>

                        {/* Tech Stacks */}
                        <div className="intro-container">
                            <h2 className="subtitle pt-10 pb-10" data-aos="zoom-in"><span className="underline-nice">Tech Stack</span></h2>
                            <div className="icon-stack-container">
                                {/* <Image className="tech-icon" width={125} height={125} src="/stack-icons/react-native.png" alt="React Native" title="React Native" /> */}
                                {/* <Image className="tech-icon" width={125} height={125} src="/stack-icons/expo.png" alt="React Native, Expo CLI" title="Expo CLI" /> */}
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/react.png" alt="React.js" title="React.js" />
                                <svg aria-label="Next.js logotype" role="img" viewBox="0 0 394 79" width="90"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="var(--geist-foreground)"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="var(--geist-foreground)"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fillRule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="var(--geist-foreground)"></path></svg>
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/js.png" alt="Vanilla js" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/node-js.png" alt="Node js" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/npm.png" alt="Node Package Manager - NPM" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/html5.png" alt="Hypertext Markup Language - Html 5" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/css3.png" alt="Stylesheet Cascades - CSS3" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/sass.png" alt="Sass: Syntactically Awesome Style Sheets" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/tailwin.webp" alt="Tailwind CSS" />
                                <Image className="tech-icon" width={125} height={125} src="/stack-icons/mongo.webp" alt="Mongo DB" />



                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default HomePage;
