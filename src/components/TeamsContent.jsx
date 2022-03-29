import React from "react";
import styled from "styled-components";
import SingleTeam from "./SingleTeam";
import SkeletonSingleTeam from "./SkeletonSingleTeam";
const Container = styled.div`
  /* height: 945px; */
  width: 1008px;
  left: 122px;
  top: 268px;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
  margin-top: 42px;
  margin-left: 42px;
`;
const Header = styled.div`
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 0 27px;
`;
const HeaderLeft = styled.div``;
const HeaderLeftText = styled.h1`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
`;
const HeaderRight = styled.div``;
const HeaderRightText = styled.h1`
  font-size: 14px;
  line-height: 17px;

  /* identical to box height, or 121% */
  font-weight: 400;

  color: #7f7f7f;
`;
const TeamsWrapper = styled.div`
  padding: 27px;
  padding-bottom: 11px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const TeamsContent = ({ teams, loading }) => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <HeaderLeftText>All Teams</HeaderLeftText>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightText>Showing {teams.length} of 9 teams</HeaderRightText>
        </HeaderRight>
      </Header>
      <TeamsWrapper>
        {loading
          ? teams.map((item) => (
              <SkeletonSingleTeam key={item.id} team={item} />
            ))
          : teams.map((item) => <SingleTeam team={item} key={item.id} />)}
      </TeamsWrapper>
    </Container>
  );
};

export default TeamsContent;
