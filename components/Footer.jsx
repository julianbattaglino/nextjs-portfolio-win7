import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-4 rounded">
                <div className="grid grid-flow-col gap-6">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Me</a>
                    <a className="link link-hover">Projects</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                            <SiGithub className="icon mx-2" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/julianbattaglino/" target="_blank" rel="noreferrer" className="icon-link">
                            <SiLinkedin className="icon mx-2" />
                        </Link>
                    </div>
                </div>
                <div>
                    <p>2023 Julian Battaglino. <span className="font-bold">That's all folks!</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer