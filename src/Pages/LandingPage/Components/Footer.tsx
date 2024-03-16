import logo from "../assets/Logo.svg";
import facebookicon from '../assets/facebookIcon.svg'
import twittericon from '../assets/twitterIcon.svg'
import instaicon from '../assets/instagramIcon.svg'
import iconSend from '../assets/ArrowIcon.svg'

type props = {

}

function Footer({}:props) {
    return (
        <footer className={"w-full bg-[#FBFCFF]"}>
            <div className="mx-auto w-[948px] sm:w-full h-full max-w-screen-xl py-6 lg:py-8">
                <div className="sm:w-full sm:h-full flex flex-row items-center justify-evenly sm:p-5">
                    <div className="h-[244px] sm:w-full flex flex-col justify-between sm:p-5">
                        <a href="src/Pages/LandingPage/Components/Footer" className="flex items-center">
                            <img src={logo} className="h-[48px] w-[48px]" alt="Quibly Logo"/>
                        </a>
                        <p className={'w-[209px] text-[12px] text-[#160637] font-medium'}>Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</p>
                        <div className={'flex flex-row gap-4'}>
                            <img src={facebookicon}/>
                            <img src={twittericon}/>
                            <img src={instaicon}/>
                        </div>
                    </div>
                    <div className={'md:hidden lg:hidden xs:hidden'}>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Newsletter</h2>
                        <div className={'w-[180px] bg-white flex flex-row pl-2 pr-2 text-[#160637] text-[12px] font-medium shadow-md'}>
                            <div>
                                <input className={'w-full p-2 outline-none'} placeholder={'Email'}/>
                            </div>
                            <div className={'flex justify-center'}>
                                <img src={iconSend} className={'w-full bg-[smokewhite]'}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[244px] flex flex-row gap-6 sm:hidden">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Product</h2>
                            <ul className="flex flex-col gap-2 text-[#160637] text-[12px] font-medium">
                                <li>
                                    <a className="hover:underline">Connections</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Protocols</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Personas</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Integrations</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Catalog</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Pricing</a>
                                </li>
                                <li className="">
                                    <a className="hover:underline">Security</a>
                                </li>
                                <li>
                                    <a className="hover:underline">GDPR</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">For Developers</h2>
                            <ul className="flex flex-col gap-2 text-[#160637] text-[12px] font-medium">
                                <li>
                                    <a className="hover:underline ">Docs</a>
                                </li>
                                <li>
                                    <a className="hover:underline">API</a>
                                </li>
                                <li>
                                    <a className="hover:underline ">Open Source</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Engineering Team</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                            <ul className="flex flex-col gap-2 text-[#160637] text-[12px] font-medium">
                                <li>
                                    <a className="hover:underline ">Careers</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a className="hover:underline ">Press</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Support</h2>
                            <ul className="flex flex-col gap-2 text-[#160637] text-[12px] font-medium">
                                <li>
                                    <a className="hover:underline ">Help Center</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Contact Us</a>
                                </li>
                                <li>
                                    <a className="hover:underline ">Security</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Bulletins</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Documentation</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Partner</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Portal</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Newsletter</h2>
                            <div className={'w-[180px] bg-white flex flex-row pl-2 pr-2 text-[#160637] text-[12px] font-medium shadow-md'}>
                                <div>
                                    <input className={'w-full p-2 outline-none'} placeholder={'Email'}/>
                                </div>
                                <div className={'flex justify-center'}>
                                    <img src={iconSend} className={'w-full bg-[smokewhite]'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  flex-col items-center mt-16">
                    <span className="text-sm font-medium text-black sm:text-center">
                        Developer: Oscar Vaquera
                    </span>
                    <span className="text-sm font-medium text-black sm:text-center">
                        UI Designer: Rahul Rao
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;