import ButtonAdd from "../ButtonAdd/ButtonAdd";
import InputText from "../InputText/InputText";
import { Title } from "../Title/Title";


export const Main = () => {
    return (
        <>
            <main className="bg-zinc-700 h-dvh w-dvw flex flex-col items-center justify-center gap-20">
                <div>
                    <h1 className="font-bold">
                        <Title text="Olá, Adicione Um Novo Item Na Sua Lista!" esconderCursor/>
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <InputText />
                    <ButtonAdd />
                </div>
            </main>
        </>
    );
};
