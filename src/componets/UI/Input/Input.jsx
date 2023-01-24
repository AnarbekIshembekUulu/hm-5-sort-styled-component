import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
  box-shadow: rgb(9, 10, 10) 0px 10px 20px -10px;
`;

const LabelStyle = styled.label`
  margin-left: -430px;
  color: rgba(7, 15, 86, 0.705);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

function Input({ labelName, inputType, placeHolder, onChange, ...rest }) {
  return (
    <div className="div-Input">
      <div>
        <LabelStyle>{labelName}</LabelStyle>
      </div>
      <div>
        <InputStyle
          type={inputType}
          placeholder={placeHolder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
