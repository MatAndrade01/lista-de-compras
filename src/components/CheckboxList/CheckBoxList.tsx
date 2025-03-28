import { useState } from 'react';
import styled from 'styled-components';

const CheckBoxList = () => {
  const [check, setCheck] = useState(false)

  return (
    <StyledWrapper>
      <label className="cl-checkbox">
        <input defaultChecked type="checkbox" checked={check} onChange={() => setCheck(prevState => !prevState)}/>
        <span />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cl-checkbox {
   position: relative;
   display: inline-block;
  }

  /* Input */
  .cl-checkbox > input {
   appearance: none;
   -moz-appearance: none;
   -webkit-appearance: none;
   z-index: -1;
   position: absolute;
   left: -10px;
   top: -8px;
   display: block;
   margin: 0;
   border-radius: 50%;
   width: 60px;
   height: 60px;
   background-color: rgba(0, 0, 0, 0.6);
   box-shadow: none;
   outline: none;
   opacity: 0;
   transform: scale(1);
   pointer-events: none;
   transition: opacity 0.3s, transform 0.2s;
  }

  /* Span */
  .cl-checkbox > span {
   display: inline-block;
   width: 100%;
   cursor: pointer;
  }

  /* Box */
  .cl-checkbox > span::before {
   content: "";
   display: inline-block;
   box-sizing: border-box;
   margin: 3px 11px 3px 1px;
   border: solid 2px;
   /* Safari */
   border-color: rgba(0, 0, 0, 0.6);
   border-radius: 2px;
   width: 25px;
   height: 25px;
   vertical-align: top;
   transition: border-color 0.2s, background-color 0.2s;
  }

  /* Checkmark */
  .cl-checkbox > span::after {
   content: "";
   display: block;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 3px;
   left: 1px;
   width: 15px;
   height: 10px;
   border: solid 2px transparent;
   border-right: none;
   border-top: none;
   transform: translate(3px, 4px) rotate(-45deg);
  }

  /* Checked, Indeterminate */
  .cl-checkbox > input:checked,
  .cl-checkbox > input:indeterminate {
   background-color: #078d24;
  }

  .cl-checkbox > input:checked + span::before,
  .cl-checkbox > input:indeterminate + span::before {
   border-color: #078d24;
   background-color: #078d24;
  }

  .cl-checkbox > input:checked + span::after,
  .cl-checkbox > input:indeterminate + span::after {
   border-color: #fff;
  }

  .cl-checkbox > input:indeterminate + span::after {
   border-left: none;
   transform: translate(4px, 3px);
  }

  /* Hover, Focus */
  .cl-checkbox:hover > input {
   opacity: 0.04;
  }

  .cl-checkbox > input:focus {
   opacity: 0.12;
  }

  .cl-checkbox:hover > input:focus {
   opacity: 0.16;
  }

  /* Active */
  .cl-checkbox > input:active {
   opacity: 1;
   transform: scale(0);
   transition: transform 0s, opacity 0s;
  }

  .cl-checkbox > input:active + span::before {
   border-color: #078d24;
  }

  .cl-checkbox > input:checked:active + span::before {
   border-color: transparent;
   background-color: rgba(0, 0, 0, 0.6);
  }

  /* Disabled */
  .cl-checkbox > input:disabled {
   opacity: 0;
  }

  .cl-checkbox > input:disabled + span {
   color: rgba(0, 0, 0, 0.38);
   cursor: initial;
  }

  .cl-checkbox > input:disabled + span::before {
   border-color: currentColor;
  }

  .cl-checkbox > input:checked:disabled + span::before,
  .cl-checkbox > input:indeterminate:disabled + span::before {
   border-color: transparent;
   background-color: currentColor;
  }`;

export default CheckBoxList;
