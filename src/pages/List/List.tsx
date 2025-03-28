import { useEffect, useState } from "react"
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm"
import ButtonDelet from "../../components/ButtonDelet/ButtonDelet"
import CardList from "../../components/CardList/CardList"
import CheckboxList from "../../components/CheckboxList/CheckBoxList"
import { HeaderMobile } from "../../components/HeaderMobile/HeaderMobile"
import { Main } from "../../components/Main/Main"
import MenuMobile from "../../components/MenuMobile/MenuMobile"

interface TodoType {
  id: number,
  text: string,
  iscomleted?: boolean
}

export const List = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
 
  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saveTodos);
  }, [])

  const removeTodo = (id: number) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter(todo => todo.id !== id ? todo : null );
    localStorage.setItem('todos',JSON.stringify(filteredTodos))
    setTodos(filteredTodos)
  };

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
                    {todos.map((todo) => (
                      <li className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
                        <CheckboxList />
                        <p className="text-black mr">{todo.text}</p>
                        <ButtonDelet onClick={() => removeTodo(todo.id)}/>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-10">
                  <ButtonConfirm value="Finalizar"/>
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