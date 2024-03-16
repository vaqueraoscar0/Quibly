import profImg from "../assets/Profile.svg";
import tonkeanLogo from "../assets/TonkeanIcon.svg";
import bigSpringLogo from "../assets/BigSpringIcon.svg";
import ClearBitLogo from "../assets/ClearbitIcon.svg";
import Mineogo from "../assets/MineIcon.svg";
import shakeLogo from "../assets/ShakeIcon.svg";

type props = {

}

function Testimonial({}:props) {
    return (
        <div className={'section w-full h-full flex justify-center items-center'}>
            <div className={'h-[740px] sm:h-full w-full testimonialBackground flex justify-center items-center p-5'}>
                <div className={'flex flex-col justify-center items-center gap-[32px]'}>
                    <div className={'w-[964px] sm:w-full text-[#160637] text-[24px] font-medium text-center'}>"What I love about Qubly
                        is the easy way we can collaborate even if there is a lot of people involved in the process"
                    </div>
                    <div><img src={profImg}/></div>
                    <div className={'w-[143px] text-black text-[16px] font-bold text-center'}>Guillaume Cabane CTO @
                        BigSpring
                    </div>
                    <div className={'flex flew-row sm:flex-wrap gap-[91px] mt-[32px]'}>
                        <img src={tonkeanLogo}/>
                        <img src={bigSpringLogo}/>
                        <img src={ClearBitLogo}/>
                        <img src={Mineogo}/>
                        <img src={shakeLogo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;