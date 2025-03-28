import styled from 'styled-components';

interface ButtonDeletProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonDelet = ({onClick}: ButtonDeletProps) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <div className="trash ">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </div>
      </button>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
    .button {
    --background: #960f0f;
    border: none;
    outline: none;
    background: none;
    min-width: 35px;
    min-height: 35px;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
    color: var(--text);
    background: var(--btn, var(--background));
    box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 8px) var(--shadow);
    transform: scale(var(--scale, 1));
    transition:
      transform 0.3s,
      box-shadow 0.3s,
      background 0.3s;
  }

  .button span {
    display: block;
    font-size: 12px;
    line-height: 25px;
    font-weight: 600;
    opacity: var(--span-opacity, 1);
    transform: translateX(var(--span-x, 0)) translateZ(0);
    transition:
      transform 0.4s ease var(--span-delay, 0.2s),
      opacity 0.3s ease var(--span-delay, 0.2s);
  }

  .button .trash {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; /* Ajuste para centralizar a trash */
    top: 50%;  /* Ajuste a posição para o centro vertical */
    left: 50%; /* Ajuste a posição para o centro horizontal */
    transform: translate(-50%, -50%); /* Centraliza exatamente */
    background-color: var(--amber-700);
    transition: transform 0.5s;
  }

  .button .trash:before,
  .button .trash:after {
    content: "";
    position: absolute;
    height: 8px;
    width: 2px;
    border-radius: 1px;
    background: var(--icon, var(--trash));
    bottom: 100%;
    transform-origin: 50% 6px;
    transform: translate(var(--x, 3px), 2px) scaleY(var(--sy, 0.7))
      rotate(var(--r, 0deg));
    transition:
      transform 0.4s,
      background 0.3s;
  }

  .button .trash:before {
    left: 1px;
  }
  .button .trash:after {
    right: 1px;
    --x: -3px;
  }

  .button .trash .top {
    position: absolute;
    overflow: hidden;
    left: -4px;
    right: -4px;
    bottom: 100%;
    height: 40px;
    z-index: 1;
    transform: translateY(2px);
  }

  .button .trash .top:before,
  .button .trash .top:after {
    content: "";
    position: absolute;
    border-radius: 1px;
    background: var(--icon, var(--trash));
    width: var(--w, 12px);
    height: var(--h, 2px);
    left: var(--l, 8px);
    bottom: var(--b, 5px);
    transition:
      background 0.3s,
      transform 0.4s;
  }

  .button .trash .top:after {
    --w: 28px;
    --h: 2px;
    --l: 0;
    --b: 0;
    transform: scaleX(var(--trash-line-scale, 1));
  }

  .button .trash .top .paper {
    width: 14px;
    height: 18px;
    background: var(--paper);
    left: 7px;
    bottom: 0;
    border-radius: 1px;
    position: absolute;
    transform: translateY(-16px);
    opacity: 0;
  }

  .button .trash .top .paper:before,
  .button .trash .top .paper:after {
    content: "";
    width: var(--w, 10px);
    height: 2px;
    border-radius: 1px;
    position: absolute;
    left: 2px;
    top: var(--t, 2px);
    background: var(--paper-lines);
    transform: scaleY(0.7);
    box-shadow: 0 9px 0 var(--paper-lines);
  }

  .button .trash .top .paper:after {
    --t: 5px;
    --w: 7px;
  }

  .button .trash .box {
    width: 20px;
    height: 25px;
    border: 2px solid var(--icon, var(--trash));
    border-radius: 1px 1px 4px 4px;
    position: relative;
    overflow: hidden;
    z-index: 2;
    transition: border-color 0.3s;
  }

  .button .trash .box:before,
  .button .trash .box:after {
    content: "";
    position: absolute;
    width: 4px;
    height: var(--h, 20px);
    top: 0;
    left: var(--l, 50%);
    background: var(--b, var(--trash-lines));
  }

  .button .trash .box:before {
    border-radius: 2px;
    margin-left: -2px;
    transform: translateX(-3px) scale(0.6);
    box-shadow: 10px 0 0 var(--trash-lines);
    opacity: var(--trash-lines-opacity, 1);
    transition:
      transform 0.4s,
      opacity 0.4s;
  }

  .button .trash .box:after {
    --h: 16px;
    --b: var(--paper);
    --l: 1px;
    transform: translate(-0.5px, -16px) scaleX(0.5);
    box-shadow:
      7px 0 0 var(--paper),
      14px 0 0 var(--paper),
      21px 0 0 var(--paper);
  }

  .button .trash .check {
    padding: 4px 3px;
    border-radius: 50%;
    background: var(--check-background);
    position: absolute;
    left: 2px;
    top: 24px;
    opacity: var(--check-opacity, 0);
    transform: translateY(var(--check-y, 0)) scale(var(--check-scale, 0.2));
    transition:
      transform var(--check-duration, 0.2s) ease var(--check-delay, 0s),
      opacity var(--check-duration-opacity, 0.2s) ease var(--check-delay, 0s);
  }

  .button .trash .check svg {
    width: 8px;
    height: 6px;
    display: block;
    fill: none;
    stroke-width: 1.5;
    stroke-dasharray: 9px;
    stroke-dashoffset: var(--check-offset, 9px);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--check);
    transition: stroke-dashoffset 0.4s ease var(--checkmark-delay, 0.4s);
  }

  .button.delete {
    --span-opacity: 0;
    --span-x: 16px;
    --span-delay: 0s;
    --trash-x: 46px;
    --trash-y: 2px;
    --trash-scale: 1;
    --trash-lines-opacity: 0;
    --trash-line-scale: 0;
    --icon: #fff;
    --check-offset: 0;
    --check-opacity: 1;
    --check-scale: 1;
    --check-y: 16px;
    --check-delay: 1.7s;
    --checkmark-delay: 2.1s;
    --check-duration: 0.55s;
    --check-duration-opacity: 0.3s;
  }

  .button.delete .trash:before,
  .button.delete .trash:after {
    --sy: 1;
    --x: 0;
  }

  .button.delete .trash:before {
    --r: 40deg;
  }

  .button.delete .trash .top .paper {
    opacity: 1;
    transform: translateY(0);
  }

  .button.delete .trash .top .paper:before,
  .button.delete .trash .top .paper:after {
    transform: scaleY(1);
  }

  .button.delete .trash .box:before {
    transform: translateX(0) scale(1);
    opacity: 1;
  }

  .button.delete .trash .box:after {
    transform: translateX(0) scale(1);
  }

  .button.delete .trash .check {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .button.delete .trash .check svg {
    stroke-dashoffset: 0;
  }

  .button.delete .trash .check {
    --checkmark-delay: 0.4s;
    --check-delay: 0.5s;
    --check-duration: 0.3s;
    --check-duration-opacity: 0.3s;
  }

  .button.delete .trash .check svg {
    transition: stroke-dashoffset 0.3s ease var(--checkmark-delay, 0s);
  }
`;

export default ButtonDelet;
