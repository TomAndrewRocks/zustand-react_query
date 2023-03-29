import React from "react";
import styled from "styled-components";

export const Header = () => {
  return <HeaderView>Zustand - React Query</HeaderView>;
};

const HeaderView = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: #aa4d36;
  color: white;
  min-height: 50px;
`;
