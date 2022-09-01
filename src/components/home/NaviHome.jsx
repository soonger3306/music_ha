import React from "react";
import styled from "styled-components";

const HomeNavigator = ({ children, onClick }) => {
  return <StHomeNavigator onClick={onClick}>{children}</StHomeNavigator>;
};

export default HomeNavigator;

const StHomeNavigator = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgb(238, 238, 238);
  margin-top: 30px;
  border-radius: 8px;
  cursor: pointer;
  h3 {
    font-size: 24px;
    font-weight: 400;
    transform: scale(0.9);
    transition: all 0.5s;
  }
  div {
    font-size: 24px;
    font-weight: 400;
    transition: all 0.4s;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 4px 6px 5px;
    h3 {
      transform: scale(1.12);
    }
    div {
      font-size: 32px;
      font-weight: 400;
    }
  }
`;