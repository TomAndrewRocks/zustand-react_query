import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

type ContainerProps = PropsWithChildren<{
  children?: ReactNode;
}>;

export const LayoutContainer = (props: ContainerProps) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
