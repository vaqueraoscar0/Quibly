import engineerImg from "../assets/engineerteamSectionImg.svg";
import engTag from '../assets/ForEngineeringIcon.svg'

type props = {

}

function EngineerTeam({}:props) {
    return (
        <div className={'section w-full h-full flex justify-center items-center p-5'}>
            <div className={'max-w-[1174px] flex flex-row sm:flex-col items-center gap-[60px]'}>
                <div className={'max-w-[509px] flex flex-col gap-4'}>
                    <div className={'max-w-[412px] '}><img src={engTag}/></div>
                    <div className={'text-[32px] font-bold'}>Data-driven pipelines in minutes</div>
                    <div className={'max-w-[672px] text-left text-[#8989A2] font-medium'}>Maintenance-free data pipelines
                        with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.
                    </div>
                </div>
                <div className={'max-w-[412px] '}><img src={engineerImg}/></div>
            </div>
        </div>
    );
}

export default EngineerTeam;