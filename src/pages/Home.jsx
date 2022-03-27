import React from "react";
import styled from "styled-components";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";
const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;
const Home = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
    </Container>
  );
};

export default Home;
