import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <ul role="menubar" className="can-hover">

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/">Home</Link></li>

                <li role="menuitem" tabIndex="0" aria-haspopup="true">
                    File
                    <ul role="menu">
                        <li role="menuitem">
                            <a href="#menubar">
                                Open <span>Ctrl+O</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#menubar">
                                Save <span>Ctrl+S</span>
                            </a>
                        </li>
                        <li role="menuitem" className="has-divider">
                            <a href="#menubar">
                                Save As... <span>Ctrl+Shift+S</span>
                            </a>
                        </li>
                        <li role="menuitem"><a href="#menubar">Exit</a></li>
                    </ul>
                </li>

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/about-me">About Me</Link></li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/projects">Projects</Link></li>

            </ul>
        </>
    )
}

export default Navbar;