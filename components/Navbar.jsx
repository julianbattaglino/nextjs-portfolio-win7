import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <ul role="menubar" className="can-hover menu-items">

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/">Home</Link></li>

                <li role="menuitem" tabIndex="0" aria-haspopup="true">
                    Files
                    <ul role="menu">

                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Posts
                            <ul role="menu">
                                <li role="menuitem">
                                    <Link className="menu-item" href="/posts/css-text-gradient">
                                        Text Gradient
                                    </Link>
                                </li>
                                <li role="menuitem">
                                    <Link className="menu-item" href="/posts/aos-js">
                                        AOS JS
                                    </Link>
                                </li>
                                <li role="menuitem">
                                    <Link className="menu-item" href="/posts/aos-reactjs">
                                        AOS React.js
                                    </Link>
                                </li>


                            </ul>
                        </li>

                        <li role="menuitem">
                        <Link className="menu-item" href="/homer">
                                Homer J Simpson <span>Esc+Ctrl+Pgup</span>
                                </Link>
                        </li>

                    </ul>
                </li>

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/about"> About</Link></li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/personal-projects">Projects</Link></li>

            </ul>
        </>
    )
}

export default Navbar;