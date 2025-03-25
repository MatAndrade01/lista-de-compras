/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}", // Caminho para os arquivos que o Tailwind deve escanear
    ],
    theme: {
        extend: {
            keyframes: {
                "animar-cursor": {
                    "0%": {
                        opacity: 1,
                        color: "green", // Cor verde
                    },
                    "50%": {
                        opacity: 0, // Desaparecendo no meio da animação
                    },
                    "100%": {
                        opacity: 1,
                        color: "green", // Mantendo a cor verde ao final
                    },
                },
            },
            animation: {
                "animar-cursor": "animar-cursor 1s infinite", // Animação de 1 segundo, infinita
            },
        },
    },
    plugins: [],
};
