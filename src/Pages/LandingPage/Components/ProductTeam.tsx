import groupImg from "../assets/GroupCompaniesIcon.svg";
import productImg from "../assets/productTeamTag.svg";

type props = {

}

function ProductTeam({}:props) {
    return (
        <div className={'section w-full h-full flex justify-center items-center p-5'}>
            <div className={'w-[974px] sm:w-full sm:h-full flex flex-row sm:flex-col-reverse items-center gap-[60px] mb-20'}>
                <div className={'max-w-[412px] '}><img src={groupImg}/></div>
                <div className={'max-w-[474px] flex flex-col gap-4'}>
                    <div className={'max-w-[412px] '}><img src={productImg}/></div>
                    <div className={'text-[32px] font-bold'}>Launch with the best stack</div>
                    <div className={'max-w-[672px] text-left text-[#8989A2] font-medium'}>A centralized platform
                        that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that
                        leaves no data behind
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTeam;