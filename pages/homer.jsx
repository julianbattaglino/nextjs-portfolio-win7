import React from 'react';
import Head from 'next/head';
import { SlSocialLinkedin, SlSocialGithub, SlDoc } from "react-icons/sl";
import { ImFilePdf } from "react-icons/im";
import Link from 'next/link';
import Image from 'next/image';

const HomerPage = () => {

    return (
        <>
            <Head>
                <title>Juli4n B4tt4glin0 | Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Head>

            {/* Windows 7 Top Bar */}
            <div className="p-2">
                <div className="window active">
                    <div className="title-bar">
                        <div className="title-bar-text">C:\Homer</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>

                    {/* Windows 7 Body Content */}
                    <div className="window-body has-space">
                        <div className="intro-container">
                            
                            <img className="homer-img" src="/homer.gif" alt="Homer.J.Simpson Esc Ctrl Pgup" title="Homer Esc + Ctrl + PgUp" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default HomerPage;
