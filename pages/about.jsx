import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SlDoc, SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';

const sections = [
    { id: 'profile', label: 'Perfil' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Stack y formación' },
    { id: 'personal', label: 'Personal' },
];

const experience = [
    {
        date: '2017 - actualidad',
        role: 'Front-End Developer / Web Developer',
        company: 'Studio Krass',
        detail: 'Desarrollo web integral para clientes y empresas: análisis, interfaces, sitios, landing pages, e-commerce, implementación, SEO, analítica y mantenimiento.',
    },
    {
        date: 'jul. 2022 - dic. 2025',
        role: 'Front-End Web Developer',
        company: 'Netco Real Estate / NetCo by Sole Oroná',
        detail: 'Sitios y landing pages orientados a conversión para proyectos inmobiliarios. Configuración de Meta Pixel, Google Analytics y Google Ads en proyectos de Argentina, Estados Unidos, Uruguay y España.',
    },
    {
        date: 'oct. 2020 - 2023',
        role: 'Front-End Web Developer',
        company: 'HA Emprendimientos',
        detail: 'Desarrollo de sitios y landing pages para edificios y nuevos desarrollos inmobiliarios, junto con medición de conversiones y herramientas de marketing digital.',
    },
];

const skillGroups = [
    {
        title: 'Desarrollo web',
        detail: 'React.js, Next.js, JavaScript, Node.js, HTML5, CSS3, Tailwind CSS y REST APIs.',
    },
    {
        title: 'Contenido y producto',
        detail: 'WordPress, WooCommerce, SEO, SEM, Git y GitHub.',
    },
    {
        title: 'Analítica y conversión',
        detail: 'Google Analytics, Google Ads, Meta Pixel y seguimiento de conversiones.',
    },
    {
        title: 'Diseño y herramientas',
        detail: 'Figma, Adobe XD, Photoshop, Autodesk Fusion 360 y modelado 3D paramétrico.',
    },
    {
        title: 'IA aplicada',
        detail: 'ChatGPT, Gemini, Claude, Antigravity, LLMs, prompt engineering y configuración de skills.',
    },
];

const previousExperience = [
    'Freelance - desarrollo Android Jr. y diseño UI/UX (2017 - 2018).',
    'DF TECH S.R.L. - seguridad electrónica, CCTV, VoIP y redes (2017 - 2019).',
    'Terragene - operario de producción (2016 - 2017).',
    'C.P.E. Informática - mantenimiento e instalación (2014 - 2016).',
    'Selecsa S.R.L. - técnico de redes informáticas (2011 - 2013).',
    'Dirección de Restauración de Rosario - técnico auxiliar restaurador (2004 - 2008).',
];

const AboutMe = () => {
    const [activeSection, setActiveSection] = useState('profile');

    return (
        <>
            <Head>
                <title>Sobre mí - Julian Battaglino</title>
                <meta
                    name="description"
                    content="Julian Battaglino, Front-End Developer especializado en React, Next.js y desarrollo web integral."
                />
            </Head>

            <main className="about-page">
                <div className="window active about-window">
                    <div className="title-bar">
                        <div className="title-bar-text">C:\Users\Julian\Profile</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>

                    <div className="window-body has-space about-window-body">
                        <header className="about-hero">
                            <div className="about-portrait-wrap">
                                <Image
                                    className="about-portrait"
                                    src="/julian-battaglino-pic-4.png"
                                    alt="Julian Battaglino"
                                    width={612}
                                    height={612}
                                    priority
                                />
                                <span className="about-portrait-caption">julian-battaglino.jpg</span>
                            </div>

                            <div className="about-intro">
                                <p className="about-eyebrow">Desarrollo web · Azul, Buenos Aires</p>
                                <h1>Julian Battaglino</h1>
                                <p className="about-role">Front-End Developer | React | Next.js | JavaScript</p>
                                <p className="about-lead">
                                    Desarrollo productos web de punta a punta: desde entender el problema y diseñar la interfaz,
                                    hasta integrar servicios, medir resultados y mantener cada proyecto en producción.
                                </p>

                                <div className="about-actions">
                                    <Link className="about-action about-action-primary" href="/cv-julian-battaglino.pdf" target="_blank" rel="noreferrer" prefetch={false}>
                                        <SlDoc aria-hidden="true" /> Ver currículum
                                    </Link>
                                    <Link
                                        className="about-action"
                                        href="https://wa.me/542281563701?text=Hola%20Julian%2C%20quiero%20que%20trabajemos%20juntos"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaWhatsapp aria-hidden="true" /> Contactar por WhatsApp
                                    </Link>
                                    <Link className="about-action" href="/work-projects">
                                        Ver proyectos
                                    </Link>
                                </div>

                                <div className="about-social-links" aria-label="Perfiles profesionales">
                                    <Link href="https://www.linkedin.com/in/julianbattaglino/" target="_blank" rel="noreferrer">
                                        <SlSocialLinkedin aria-hidden="true" /> LinkedIn
                                    </Link>
                                    <Link href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer">
                                        <SlSocialGithub aria-hidden="true" /> GitHub
                                    </Link>
                                    <Link href="mailto:julianbattaglino@gmail.com">julianbattaglino@gmail.com</Link>
                                </div>
                            </div>
                        </header>

                        <div className="about-facts" aria-label="Resumen profesional">
                            <div><strong>Casi 10 años</strong><span>de experiencia profesional</span></div>
                            <div><strong>2017 - hoy</strong><span>en Studio Krass</span></div>
                            <div><strong>7 países</strong><span>con proyectos y clientes</span></div>
                        </div>

                        <nav className="about-tabs" aria-label="Secciones del perfil">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    type="button"
                                    className={activeSection === section.id ? 'about-tab is-active' : 'about-tab'}
                                    aria-pressed={activeSection === section.id}
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>

                        <section className="about-content" aria-live="polite">
                            {activeSection === 'profile' && (
                                <div className="about-overview">
                                    <div>
                                        <h2>Un perfil entre producto y desarrollo</h2>
                                        <p>
                                            Soy un desarrollador autodidacta y orientado a resolver problemas. Trabajo directamente
                                            con clientes para relevar necesidades, organizar el proyecto y convertir objetivos de negocio
                                            en experiencias web claras, rápidas y mantenibles.
                                        </p>
                                    </div>
                                    <div className="about-markets">
                                        <h2>Experiencia internacional</h2>
                                        <p>
                                            Proyectos para clientes y equipos de Argentina, Uruguay, España, Francia, Bélgica,
                                            Estados Unidos e Inglaterra.
                                        </p>
                                    </div>
                                    <div className="about-profile-note">
                                        <strong>También aporto experiencia técnica en infraestructura.</strong>
                                        <span>Redes, telefonía IP, CCTV y seguridad electrónica forman parte de mi recorrido profesional.</span>
                                    </div>
                                </div>
                            )}

                            {activeSection === 'experience' && (
                                <div className="about-experience">
                                    <h2>Experiencia profesional</h2>
                                    <ol className="about-timeline">
                                        {experience.map((item) => (
                                            <li key={item.company} className="about-timeline-item">
                                                <p className="about-date">{item.date}</p>
                                                <div>
                                                    <h3>{item.role}</h3>
                                                    <p className="about-company">{item.company}</p>
                                                    <p>{item.detail}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <details className="about-details">
                                        <summary>Experiencia previa</summary>
                                        <ul>
                                            {previousExperience.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </details>
                                </div>
                            )}

                            {activeSection === 'skills' && (
                                <div className="about-skills-layout">
                                    <div>
                                        <h2>Herramientas y tecnologías</h2>
                                        <dl className="about-skill-list">
                                            {skillGroups.map((group) => (
                                                <div className="about-skill-row" key={group.title}>
                                                    <dt>{group.title}</dt>
                                                    <dd>{group.detail}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                    <div className="about-education">
                                        <h2>Formación</h2>
                                        <div className="about-education-item">
                                            <strong>Coderhouse</strong>
                                            <span>2022 · Carrera de Desarrollo Front-End React</span>
                                        </div>
                                        <div className="about-education-item">
                                            <strong>Coderhouse</strong>
                                            <span>Curso React.js</span>
                                        </div>
                                        <div className="about-education-item">
                                            <strong>IDETEL</strong>
                                            <span>2017 · Certificación en redes sobre voz IP</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeSection === 'personal' && (
                                <div className="about-gallery-section">
                                    <div>
                                        <h2>Un poco más de cerca</h2>
                                        <p>Algunas fotos personales que ya formaban parte de este espacio.</p>
                                    </div>
                                    <div className="about-gallery">
                                        <figure>
                                            <Image src="/images/julian-battaglino.jpg" alt="Julian Battaglino" width={900} height={700} />
                                            <figcaption>julianbattaglino.jpg</figcaption>
                                        </figure>
                                        <figure>
                                            <Image src="/images/nina.jpg" alt="Nina" width={900} height={700} />
                                            <figcaption>nina.jpg</figcaption>
                                        </figure>
                                        <figure>
                                            <Image src="/images/vitto-mom.jpg" alt="Vitto junto a su mamá" width={900} height={700} />
                                            <figcaption>vitto-mom.jpg</figcaption>
                                        </figure>
                                        <figure className="about-illustration">
                                            <Image src="/julian-battaglino.webp" alt="Ilustración de Julian Battaglino" width={250} height={250} />
                                            <figcaption>julianbattaglino.webp</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    <div className="status-bar">
                        <p className="status-bar-field">Julian Battaglino · Front-End Developer</p>
                        <p className="status-bar-field">Perfil profesional</p>
                        <p className="status-bar-field">CV 2026</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutMe;
