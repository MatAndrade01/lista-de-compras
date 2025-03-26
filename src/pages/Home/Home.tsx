import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile"
import InputText from "../../components/InputText/InputText"
import { Main } from "../../components/Main/Main"
import MenuMobile from "../../components/MenuMobile/MenuMobile"
import { Title } from "../../components/Title/Title"

export const Home = () => {
  return (
    <>
      <HeaderMobile>
          <div className="relativ">
            <div className="fixed top-0 right-0 left-0">
              <Main>
                <div>
                    <h1 className="font-bold">
                        <Title text="Olá, Adicione Um Novo Item Na Sua Lista!" esconderCursor/>
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <InputText />
                    <ButtonAdd />
                </div>
              </Main>
            </div>
          </div>
      </HeaderMobile>
      <MenuMobile />
    </>
  )
}