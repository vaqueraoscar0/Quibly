import {useEffect} from 'react';
import gsap from "gsap";
import Hero from "./Hero";
import WhyQuibly from "./WhyQuibly";
import ProductTeam from "./ProductTeam";
import EngineerTeam from "./EngineerTeam";
import Testimonial from "./Testimonial";
import SignupForm from "./SignupForm";

type props = {}

function LandscapeReveal({}:props) {
    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        sections.forEach(section => {
            gsap.fromTo(section,
                {y: 50, opacity: 0},
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        end: "bottom top",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

    }, []);

    return (
        <div className={'w-full h-full flex flex-col items-center justify-center gap-20'}>
            {/*section 1*/}
            <Hero/>
            {/*section 2*/}
            <WhyQuibly/>
            {/*section 3*/}
            <ProductTeam/>
            {/*section 4*/}
            <EngineerTeam/>
            {/*section 5*/}
            <Testimonial/>
            {/*section 6*/}
            <SignupForm/>
            {/*section 7*/}

        </div>
    );
}

export default LandscapeReveal;