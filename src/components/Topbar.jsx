import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/menu-notification.svg";
import ArrowDown from "../assets/caret-down.png";
import AvatarImage from "../assets/john.png";
const Container = styled.div`
  top: 0;
  position: sticky;
  z-index: 5;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px #e2e2e2, 0px 0px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  /* align-items:center; */
  justify-content: space-between;
  /* border-bottom: 1px solid #e2e2e2; */
`;
const Left = styled.div`
  display: flex;
`;
const LeftTeam = styled.div`
  width: 166px;
  display: flex;
  justify-content: center;
  border-right: 1px solid #e2e2e2;
  align-items: center;
`;
const LeftTeamText = styled.h1`
  font-size: 18px;
  line-height: 22px;

  /* identical to box height, or 122% */

  color: #1a1919;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
const LeftPage = styled.div`
  display: flex;
  align-items: center;
`;
const LeftPageText = styled.h1`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  margin-left: 27px;

  /* identical to box height, or 122% */

  color: #000000;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;
const UserName = styled.h1`
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  margin-right: 8px;

  /* identical to box height, or 121% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
const UserImg = styled.img`
  margin-right: 10px;
`;
const ArrowDownImg = styled.img`
  cursor: pointer;
`;

const NotifIcon = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <Left>
        <LeftTeam>
          <LeftTeamText>NARWAL</LeftTeamText>
        </LeftTeam>
        <LeftPage>
          <LeftPageText>Teams</LeftPageText>
        </LeftPage>
      </Left>
      <Right>
        <NotifIcon src={NotificationIcon} />
        <UserAvatarContainer>
          <UserName>Hello ,John</UserName>

          <UserImg src={AvatarImage} />

          <ArrowDownImg src={ArrowDown} />
        </UserAvatarContainer>
      </Right>
    </Container>
  );
};

export default Topbar;
