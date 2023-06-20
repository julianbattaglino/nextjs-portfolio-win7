import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <ul role="menubar" className="can-hover">

                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/">Home</Link></li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/about-me">About Me</Link></li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true"><Link href="/projects">Portfolio</Link></li>

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
                <li role="menuitem" tabIndex="0" aria-haspopup="true">
                    Edit
                    <ul role="menu">
                        <li role="menuitem"><a href="#menubar">Undo</a></li>
                        <li role="menuitem"><a href="#menubar">Copy</a></li>
                        <li role="menuitem"><a href="#menubar">Cut</a></li>
                        <li role="menuitem" className="has-divider"><a href="#menubar">Paste</a></li>
                        <li role="menuitem"><a href="#menubar">Delete</a></li>
                        <li role="menuitem"><a href="#menubar">Find...</a></li>
                        <li role="menuitem"><a href="#menubar">Replace...</a></li>
                        <li role="menuitem"><a href="#menubar">Go to...</a></li>
                    </ul>
                </li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true">
                    View
                    <ul role="menu">
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Zoom
                            <ul role="menu">
                                <li role="menuitem"><button>Zoom In</button></li>
                                <li role="menuitem"><button>Zoom Out</button></li>
                            </ul>
                        </li>
                        <li role="menuitem"><a href="#menubar">Status Bar</a></li>
                    </ul>
                </li>
                <li role="menuitem" tabIndex="0" aria-haspopup="true">
                    Help
                    <ul role="menu">
                        <li role="menuitem"><a href="#menubar">View Help</a></li>
                        <li role="menuitem"><a href="#menubar">About</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Navbar;