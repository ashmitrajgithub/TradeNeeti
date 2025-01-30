import { GiCancel } from "react-icons/gi";


function Hamburger({toggleMenu})  {

    return (
        <>
        <nav className="hamburger md:hidden  absolute  right-0 top-0 shadow-lg">
            <div className="m-5" onClick={toggleMenu}>
                <GiCancel size={28} color=""/>
            </div>
        
                    <ul className="flex flex-col items-center gap-4 py-5  font-semibold">
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                A
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                B
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                C
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                D
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                E
                            </a>
                        </li>
                    </ul>
                </nav>
        </>
    )
};

export default Hamburger;