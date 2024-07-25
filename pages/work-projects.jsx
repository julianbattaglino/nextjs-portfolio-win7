import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import DataContainer from '../components/workdataContainer';

const Projects = () => {

    return (
        <>
            <Head>
                <title>Julian Battaglino Projects Portfolio</title>
            </Head>
            <DataContainer />
        </>
    );
};

export default Projects;
