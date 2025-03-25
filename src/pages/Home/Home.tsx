import MenuMobile from "../../components/MenuMobile/MenuMobile";
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile";
import { Main } from "../../components/Main/Main";

export const Home = () => {
    return (
        <>
            <HeaderMobile>
                <div className="relativ ">
                    <div className="fixed top-0 right-0 left-0">
                        <Main />
                    </div>
                </div>
            </HeaderMobile>
            <MenuMobile />
        </>
    );
};
