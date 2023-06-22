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
                            <a href="#">
                                Open <span>Ctrl+O</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#">
                                Save <span>Ctrl+S</span>
                            </a>
                        </li>
                        <li role="menuitem" className="has-divider">
                            <a href="#">
                                Save As... <span>Ctrl+Shift+S</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#">Exit
                            </a>
                        </li>
                    </ul>
                </li>

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/about">About</Link></li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/projects">Projects</Link></li>

            </ul>
        </>
    )
}

export default Navbar;