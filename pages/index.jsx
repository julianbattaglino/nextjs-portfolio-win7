import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import DataContainer from '../components/dataContainer';

const HomePage = () => {

    return (
        <>
            <Head>
                <title>Julian Battaglino Portfolio</title>
            </Head>
            <div className="p-6">
                <div className="window active">
                    <div className="title-bar">
                        <div className="title-bar-text">C:\</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;
