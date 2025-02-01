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
                                Why TNA
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                Faculty
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                Apply Now
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-800"
                                onClick={() => setIsNavOpen(false)}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
        </>
    )
};

export default Hamburger;