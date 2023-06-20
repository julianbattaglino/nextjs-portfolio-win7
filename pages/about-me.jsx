import React from 'react';
import Head from 'next/head';

const AboutMe = () => {

    return (
        <>
            <Head>
                <title>About Me - Julian Battaglino</title>
            </Head>
            <div className="p-2">
                <div className="window active">
                    <div className="title-bar">
                        <div className="title-bar-text">C:AboutMe</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body has-space">
                        <div className="flex justify-center">
                            <img className="avatar" src="julian-battaglino.webp" alt="Icono JPG" />
                        </div>
                        <div className="flex justify-center">
                            <span className="pt-2">julian-battaglino.jpg</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
