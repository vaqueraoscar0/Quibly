import {useState} from 'react';
import logo from '../assets/Logo.svg'

type props = {

}

function Navbar({}:props) {
    const [isAbout] = useState<boolean>(false)
    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap justify-center items-center justify-around sm:justify-between mx-auto p-5">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-9" alt="Flowbite Logo"/>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col text-[14px] font-medium text-black mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="/" className="flex flex-row justify-center items-center hover:text-[#722ED1]" aria-current="page">
                                <div>
                                    About
                                </div>
                                {!isAbout? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                        </svg>

                                    ):(
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                                        </svg>

                                    )
                                }
                            </a>
                        </li>
                        <li>
                            <a href={"/"}
                               className={`hover:text-[#722ED1]`}>Pricing</a>
                        </li>
                        <li>
                            <a href={"/"}
                               className={`hover:text-[#722ED1]`}>Contact Us</a>
                        </li>
                        <li>
                            <a href={"/"}
                               className={`hover:text-[#722ED1]`}>Login</a>
                        </li>
                        <li>
                            <a href={"/"}
                               className={`text-[#722ED1] px-4 py-3 border border-[#722ED1] rounded-3xl`}>Start free trial</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;