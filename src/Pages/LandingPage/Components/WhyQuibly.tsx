import whyQuibly from "../assets/whyQuibly.svg";
import chartimg from "../assets/chartBarIcon.svg";
import newsimg from "../assets/newsletterDevIcon.svg";
import timelineImg from "../assets/timelineIcon.svg";

type props = {

}

function WhyQuibly({}:props) {
    return (
        <div className={'section w-full h-full flex justify-center items-center p-5 pt-0 mb-16'}>
            <div className={`w-[963px] sm:w-full h-[368px] sm:h-full flex flex-col justify-center items-center gap-[24px]`}>
                <div><img src={whyQuibly}/></div>
                <div className={'text-[32px] font-bold sm:text-center'}>Get actionable insights from Big Data in 3 steps</div>
                <div className={'max-w-[672px] text-center text-[#8989A2] font-medium'}>Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </div>
                <div className={'flex flex-row sm:flex-wrap justify-center gap-4'}>
                    <div className={'max-w-[305px] flex flex-col justify-center gap-4'}>
                        <div className={'flex justify-center'}><img src={chartimg}/></div>
                        <div className={'text-center text-[16px] font-bold'}>Valuable business insights</div>
                        <div className={'text-center text-[#8989A2] font-medium'}>Collect processed & cleansed data that
                            is ready to be analyzed to gather valuable business insights.
                        </div>
                    </div>
                    <div className={'max-w-[305px] flex flex-col justify-center gap-4'}>
                        <div className={'flex justify-center'}><img src={newsimg}/></div>
                        <div className={'text-center text-[16px] font-bold'}>Powerful Algorithms</div>
                        <div className={'text-center text-[#8989A2] font-medium'}>With the help of powerful algorithms,
                            quality rules & techniques, obtain simplified & enriched data.
                        </div>
                    </div>
                    <div className={'max-w-[305px] flex flex-col justify-center gap-4'}>
                        <div className={'flex justify-center'}><img src={timelineImg}/></div>
                        <div className={'text-center text-[16px] font-bold'}>Data in real-time</div>
                        <div className={'text-center text-[#8989A2] font-medium'}>Collect data in real-time from
                            multiple channels and move it into a data lake, in its original format.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyQuibly;