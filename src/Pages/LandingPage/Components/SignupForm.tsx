import accentureImg from "../assets/accentureIcon.svg";
import reactImg from "../assets/react.svg";
import airbnbImg from "../assets/airbnbIcon.svg";
import skyImg from "../assets/skyIcon.svg";
import btnImg from "../assets/GoogleButtonIcon.svg";

type props = {

}

function SignupForm({}:props) {
    return (
        <div className={'section w-full h-full flex justify-center mb-20 sm:pb-10 overflow-hidden'}>
            <div className={'w-[962px] h-[560px] sm:w-full sm:h-full flex flex-row sm:flex-col items-center sm:justify-center gap-[80px] p-5'}>
                <div className={'h-full w-[432px] sm:w-full flex flex-col gap-4 pt-[30px]'}>
                    <div className={'text-[32px] font-bold text-[#160637] sm:text-center'}>See why the world’s best companies use Qubly
                        to become truly data-driven.
                    </div>
                    <div className={'sm:w-full flex flex-row sm:justify-center gap-4 mt-4'}>
                        <div className={'flex justify-center items-center'}>
                            <div className={'w-[144px] xs:w-[80px] border-t-[2px] border-[#D6D6D6]'}/>
                        </div>
                        <div className={'text-[#8989A2] text-[16px] font-medium '}>Trusted by</div>
                        <div className={'flex justify-center items-center'}>
                            <div className={'w-[144px] xs:w-[80px] border-t-[2px] border-[#D6D6D6]'}/>
                        </div>
                    </div>
                    <div className={'w-[424px] sm:w-full h-[302px] flex flex-col items-center justify-evenly'}>
                        <div className={'w-full flex flex-row justify-around'}>
                            <img src={accentureImg}/>
                            <img src={reactImg}/>
                        </div>
                        <div className={'w-full flex flex-row justify-around'}>
                            <img src={airbnbImg}/>
                            <img src={skyImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={'w-[428px] h-[494px] signupShadow xs:hidden'}>
                    <div className={'w-full h-full flex flex-col justify-around items-center p-5 rounded-md shadow-md'}>
                        <div id={'form_title'} className={'text-[24px] font-bold'}>Sign Up</div>
                        <div id={'form_title'}>
                            <button className={'rounded-md bg-[#722ED1] w-[344px] h-[48px] text-white text-[16px] font-medium'}>Start
                                your free trial
                            </button>
                        </div>
                        <div className={'w-full flex flex-col items-center gap-4 text-[16px] text-[#8989A2] font-medium'}>
                            <input className={'w-[348px] h-[48px] p-2 border border-[#D9D9D9]'}
                                   placeholder={'Your primary email'}/>
                            <input className={'w-[348px] h-[48px] p-2 border border-[#D9D9D9]'} placeholder={'Password'}/>
                            <input className={'w-[348px] h-[48px] p-2 border border-[#D9D9D9]'}
                                   placeholder={'Re-type Password'}/>
                        </div>
                        <div className={'text-[16px] font-medium'}>OR</div>
                        <div><img src={btnImg}/></div>
                        <div className={'w-[336px] border border-t-[1px] border-gray-300'}/>
                        <div className={'text-[14px]'}>Already have an account? <a className={'text-[#722ED1]'}>Login</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SignupForm;