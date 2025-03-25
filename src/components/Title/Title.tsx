import { useEffect, useState } from "react";

interface TitleProps {
    text: string;
    esconderCursor?: boolean;
    delay?: number;
}

export const Title = ({ text, esconderCursor = false, delay = 100 }: TitleProps) => {
    const [displayText, setDisplayText] = useState("");
    const [mostrarCursor, setMostrarCursor] = useState(true);

    const escreverNaTela = (text: string, i = 0) => {
        if (i < text.length) {
            setMostrarCursor(true);
            setDisplayText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), delay);
        } else if (i >= text.length && esconderCursor) {
            setMostrarCursor(false);
        }
    };

    useEffect(() => {
        escreverNaTela(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    return (
        <div className="text-white"> {}
            {displayText}
            {mostrarCursor && (
                <span
                    className="animate-animar-cursor text-green-500 ml-1">
                    |
                </span>
            )}
        </div>
    );
};
