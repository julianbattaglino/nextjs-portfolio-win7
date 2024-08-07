import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SlDoc, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";


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
                    </div>
                    <div className="window-body has-space body-file-explorer">
                        {/* Daisy UI Modal - Open the modal using ID.showModal() method */}
                        <div data-aos="zoom-in" onClick={() => window.my_modal_1.showModal()}>
                            <Image data-aos="zoom-in" src="/notepad.png" alt="Julian Battaglino - About Me Notepad Icon" width={40} height={40} /><span>about.txt</span>
                        </div>
                        <div data-aos="zoom-in" onClick={() => window.my_modal_2.showModal()}>
                            <Image data-aos="zoom-in" src="/pictures.ico" alt="Julian Battaglino - About Me Notepad Icon" width={40} height={40} /><span>pictures</span>
                        </div>
                        <div data-aos="zoom-in" onClick={() => window.my_modal_3.showModal()}>
                            <Image className="m-auto" src="/julian-battaglinox64.webp" alt="Julian Battaglino - Desarrollador Web Avatar Barba" width={40} height={40} /><span>julianbattaglino.jpg</span>
                        </div>
                    </div>
                </div>

                <dialog id="my_modal_1" className="modal p-2" >
                    <div className="window aboutme-modal">
                        <form method="dialog">
                            <div className="title-bar">
                                <div className="title-bar-text">C:/About.txt</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                    <button aria-label="Maximize"></button>
                                    <button aria-label="Close"></button>
                                </div>

                            </div>
                            <div className="window-body has-space">
                                <p className="font-bold">A introduction about me:</p>
                                <p>Im a self-taught web developer, a hands-on problem solver with a bunch of experience in different technologies. I know my way around HTML5, CSS3, SASS, SCSS, JavaScript, jQuery, React.js, Next.js, Node.js, and NPM. Im passionate about what I do, so I use these tech tools like a boss and stay up-to-date with the latest web development trends. Im always learning and ready to tackle new challenges in this fast-paced tech field.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}

                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="">Close</button>
                                    </div>

                                </div>
                            </div>
                            <div className="status-bar">
                                <p className="status-bar-field">Press F1 for help</p>
                                <p className="status-bar-field">Slide 1</p>
                                <p className="status-bar-field">CPU Usage: 14%</p>
                            </div>
                        </form>
                    </div>
                </dialog>

                <dialog id="my_modal_2" className="modal p-2" >
                    <div className="window aboutme-modal">
                        <form method="dialog">
                            <div className="title-bar">
                                <div className="title-bar-text">C:/images</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                    <button aria-label="Maximize"></button>
                                    <button aria-label="Close"></button>
                                </div>

                            </div>
                            <div className="window-body has-space">
                                <div className="img-grid-container">
                                    <div>
                                        <Image className="m-auto" src="/images/julian-battaglino.jpg" alt="Julian Battaglino - Desarrollador Web Avatar Barba" width={175} height={175} /><span className="font-bold pt-2 pb-2 flex justify-center">julianbattaglino.jpg</span>
                                    </div>
                                    <div>
                                        <Image className="m-auto" src="/images/nina.jpg" alt="Julian Battaglino - Desarrollador Web Avatar Barba" width={175} height={175} /><span className="font-bold pt-2 pb-2 flex justify-center">nina.jpg</span>
                                    </div>
                                    <div>
                                        <Image className="m-auto" src="/images/vitto-mom.jpg" alt="Julian Battaglino - Desarrollador Web Avatar Barba" width={175} height={175} /><span className="font-bold pt-2 pb-2 flex justify-center">vitto-&-mom.jpg</span>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}

                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="">Close</button>
                                    </div>

                                </div>
                            </div>
                            <div className="status-bar">
                                <p className="status-bar-field">Press F1 for help</p>
                                <p className="status-bar-field">Slide 1</p>
                                <p className="status-bar-field">CPU Usage: 14%</p>
                            </div>
                        </form>
                    </div>
                </dialog>


                <dialog id="my_modal_3" className="modal p-2" >
                    <div className="window aboutme-modal">
                        <form method="dialog">
                            <div className="title-bar">
                                <div className="title-bar-text">C:/julianbattaglino.jpg</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                    <button aria-label="Maximize"></button>
                                    <button aria-label="Close"></button>
                                </div>

                            </div>
                            <div className="window-body has-space">
                                <Image className="m-auto" src="/julian-battaglino.webp" alt="Julian Battaglino - Desarrollador Web Avatar Barba" width={175} height={175} /><span className="font-bold pt-2 pb-2 flex justify-center">julianbattaglino.jpg</span>
                                <p>This is me, in cartoon form, lookin all dapper and classy! Take a good look at this polished and elegant caricature, cause its a once-in-a-lifetime opportunity, folks! Dont miss out!.</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}

                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="">Close</button>
                                    </div>

                                </div>
                            </div>
                            <div className="status-bar">
                                <p className="status-bar-field">Press F1 for help</p>
                                <p className="status-bar-field">Slide 1</p>
                                <p className="status-bar-field">CPU Usage: 14%</p>
                            </div>
                        </form>
                    </div>
                </dialog>

            </div>
        </>
    );
};

export default AboutMe;
