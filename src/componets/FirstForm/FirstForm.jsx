import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styled from "styled-components";

const DivInputAgeUserName = styled.div`
  background-image: linear-gradient(95deg, #91aac0, #8cbdbb, #5e8cba);
  margin-top: 50px;
  width: 600px;
  height: 150px;
  margin-left: 500px;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 2px 30px 20px -10px;
`;

function FirstForm({ saveAgeNameHandler }) {
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");

  const titleInputHandler = (event) => {
    const valueText = event.target.value;
    setTitle(valueText);
  };
  const ageInputHandler = (event) => {
    const valueAge = event.target.value;
    if (valueAge.charAt(0) !== "-") {
      setAge(valueAge);
    }
  };

  const save = (event) => {
    event.preventDefault();
    const saveInputValue = {
      title,
      age,
    };
    saveAgeNameHandler(saveInputValue);
    setTitle("");
    setAge("");
  };

  return (
    <div>
      <DivInputAgeUserName>
        <Input
          labelName="Username"
          inputType="text"
          placeholder="..."
          value={title}
          onChange={titleInputHandler}
        />
        <Input
          labelName="Age (Year)"
          inputType="number"
          placeholder="AGE"
          value={age}
          onChange={ageInputHandler}
        />
      </DivInputAgeUserName>
      <Button
        btnDisable={title === "" || age === ""}
        valueText={"ADD"}
        onClick={save}
      />
    </div>
  );
}

export default FirstForm;
