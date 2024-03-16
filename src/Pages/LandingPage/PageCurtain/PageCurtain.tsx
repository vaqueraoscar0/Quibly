import IntroOverlay from "./SubComponents/IntroOverlay";
import {useEffect, useState} from "react";

type props = {

}

function PageCurtain({}:props) {
    const [isVisible,setIsVisible] = useState<boolean>(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={isVisible? '': 'hidden'}>
            <IntroOverlay/>
        </div>
    )
}

export default PageCurtain;
