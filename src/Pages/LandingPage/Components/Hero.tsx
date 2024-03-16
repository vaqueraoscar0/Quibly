import tag from "../assets/ReleaseTag.svg";
import landingImg from "../assets/landingSectionImage.svg";
import RevealText from "./SubComponents/RevealText";

type props = {

}

function Hero({}:props) {
    return (
        <div className={'w-full h-full justify-center items-center p-5'}>
            <div className={`h-[696px] sm:h-full flex flex-row sm:flex-col justify-center items-center`}>
                <div className={`flex flex-col sm:items-center w-[472px] sm:w-full h-[294px] sm:h-full gap-4`}>
                    <div className={'pb-4 xs:w-full xs:text-left'}><img src={tag} /></div>
                    <div className={'text-[48px] font-bold leading-none text-balance sm:max-w-[490px]'}>
                        {/*Your data with real-time analytics*/}
                        <RevealText text={'Your data with'}/>
                        <RevealText text={'real-time analytics'}/>
                    </div>
                    <div className={'text-[#8989A2] font-medium sm:max-w-[490px]'}>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven
                        organization with Needle tail
                    </div>
                    <div className={'flex flex-row justify-start gap-4'}>
                        <button className={'bg-[#722ED1] text-white font-medium px-5 py-2 border border-[#722ED1] rounded-3xl'}>Start free trial</button>
                        <button className={'bg-white text-[#722ED1] font-medium px-5 py-2 border border-white rounded-3xl'}>Learn more</button>
                    </div>
                </div>
                <div className={'sm:flex sm:justify-center sm:w-full sm:h-full'}>
                    <img src={landingImg} className={'w-[472px] xs:w-full h-[370px] xs:h-full'}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;