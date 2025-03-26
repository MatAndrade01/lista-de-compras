import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode
}

const Card = ({children}: CardProps) => {
  return (
    <StyledWrapper>
      <div className="card flex flex-col">
        {children}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 80vw;
    height: 70vh;
    border-radius: 30px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
    overflow-y: auto; /* Adiciona a barra de rolagem */
    padding: 1rem;    /* Espaçamento interno para melhor visualização */
  }

  /* Estilo opcional para personalizar a barra de rolagem */
  .card::-webkit-scrollbar {
    width: 8px;
  }

  .card::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  .card::-webkit-scrollbar-track {
    background-color: #333;
  }
`;

export default Card;
