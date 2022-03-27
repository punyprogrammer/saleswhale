import React from "react";
import styled from "styled-components";
import Topbar from "./Topbar";
import TeamsHeader from "./TeamsHeader";
import TeamsContent from "./TeamsContent";
import Activity from "./Activity";
const Container = styled.div`
  width: calc(100vw - 80px);
  background-color: #e5e5e5;
  padding-bottom: 50px;
`;
const MainContent = styled.div`
  display: flex;

`;
const RightContainer = () => {
  return (
    <Container>
      <Topbar />
      <TeamsHeader />
      <MainContent>
        <TeamsContent />
        <Activity />
      </MainContent>
    </Container>
  );
};

export default RightContainer;
