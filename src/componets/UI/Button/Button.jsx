import React from 'react'
import styled from "styled-components"



const ButtonAdd = styled.button`
  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: aliceblue;
  background-image: linear-gradient(99deg, #d31027, #ea384d);
  width: 150px;
  height: 40px;
  margin-left: 75px;
  margin-top: 40px;
  border-style: none;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 2px 10px 20px 0px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(90deg, #ec37d0, #d92b2b, #ffaa0d, #ec37d0);
    background-size: 400%;
    border-radius: 50px;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover {
    animation: animate 10s linear infinite;
  }
  &:hover::before {
    filter: blur(25px);
    opacity: 0.8;
    animation: animate 10s linear infinite;
  }
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`; 

function Button(props) {
  return (
    <ButtonAdd disabled={props.btnDisable} onClick={props.onClick}>{props.valueText}</ButtonAdd>
  )
}

export default Button