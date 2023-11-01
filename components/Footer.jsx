import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram, SlDoc } from "react-icons/sl";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-4 rounded">
                <div className="grid grid-flow-col gap-6">
                    <Link href="/" className="link link-hover">Home</Link>
                    <Link href="/about" className="link link-hover">About me</Link>
                    <Link href="/projects" className="link link-hover">Projects</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://instagram.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                            <SlSocialInstagram className="icon mx-2" />
                        </Link>
                        <Link href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                            <SlSocialGithub className="icon mx-2" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/julianbattaglino/" target="_blank" rel="noreferrer" className="icon-link">
                            <SlSocialLinkedin className="icon mx-2" />
                        </Link>
                        <Link href="/cv-julian-battaglino.pdf" target="_blank" rel="noreferrer" className="icon-link">
                            <SlDoc className="icon mx-2" />
                        </Link>
                    </div>
                </div>
                <div>
                    <p>2023 Julian Battaglino. <span className="font-bold">Thats all folks!</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer