import { useState } from "react"
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm"
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile"
import InputText from "../../components/InputText/InputText"
import { Main } from "../../components/Main/Main"
import MenuMobile from "../../components/MenuMobile/MenuMobile"
import { Title } from "../../components/Title/Title"

export const Home = () => {
  const [value, setValue] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!value) return;
    
    const existingTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const newTodo = {id: Math.floor(Math.random() * 10000), text: value};
    const updateTodos = [...existingTodos, newTodo];

    localStorage.setItem('todos', JSON.stringify(updateTodos));

    setValue("");
  };
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
                <form onSubmit={handleSubmit} className="flex items-center justify-center gap-10">
                  <InputText value={value} onChange={(e) => setValue(e.target.value)}/>
                  <ButtonConfirm value="Add" />
                </form>
              </Main>
            </div>
          </div>
      </HeaderMobile>
      <MenuMobile />
    </>
  )
}