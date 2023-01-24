import React from "react";
import styled from "styled-components";

const ListInfo = styled.div`
  width: 600px;
  height: 60px;
  background-image: linear-gradient(95deg, #4a98db, #7741ad, #5e8cba);
  display: flex;
  border-radius: 10px;
  margin-left: 458px;
  margin-top: 10px;
`;

const NameAge = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Title = styled.p`
  margin-right: 10px;
`;

function List({ userInfo }) {
  return (
    <ul>
      {userInfo.map((elem) => {
        return (
          <ListInfo>
            <NameAge>
              <Title>{elem.title}</Title>
              <p>{`(${elem.age} years old)`}</p>
            </NameAge>
          </ListInfo>
        );
      })}
    </ul>
  );
}

export default List;
