import ButtonDelet from "../../components/ButtonDelet/ButtonDelet"
import CardList from "../../components/CardList/CardList"
import CheckboxList from "../../components/CheckboxList/CheckBoxList"
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile"
import { Main } from "../../components/Main/Main"
import MenuMobile from "../../components/MenuMobile/MenuMobile"

export const List = () => {
  return (
    <>
      <HeaderMobile>
        <div className="relative">
          <div className="fixed top-0 right-0 left-0">
            <Main>
              <CardList>
                <div className="flex">
                  <h1 className="text-white text-center mt-5 font-bold w-full">Lista de Compras!</h1>
                </div>
                <div className="flex justify-center p-4">
                  <ul className="flex flex-col w-full max-w-md justify-between">
                    <li className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
                      <CheckboxList />
                      <p className="text-black mr">Motadela de Frango</p>
                      <ButtonDelet />
                    </li>
                  </ul>
                </div>
              </CardList>
            </Main>
          </div>
        </div>
      </HeaderMobile>
      <MenuMobile />
    </>
  )
}