import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageCurtain from "./PageCurtain/PageCurtain";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import LandscapeReveal from "./Components/LandscapeReveal";

type props = {

}

function LandingPage({}:props) {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smooth: true,
            direction: 'vertical',
        }as any);

        function raf(time:any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <div className={`w-full h-full text-black LandingBackground`}>
            <PageCurtain/>
            <Navbar/>
            <LandscapeReveal/>
            <Footer/>
        </div>
    );
}

export default LandingPage;