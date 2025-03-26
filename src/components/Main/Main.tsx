import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

export const Main = ({children}: MainProps) => {
    return (
        <>
            <main className="bg-zinc-700 h-dvh w-dvw flex flex-col items-center justify-center gap-20">
                {children}
            </main>
        </>
    );
};
