import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin-bottom: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
`;

const TopTextContainer = styled.div`
  width: 204px;
  margin-left: 10px;
`;
const TopText = styled.p`
  font-size: 14px;
  line-height: 17px;

  /* or 121% */
  color: #444444;
`;
const UserImg = styled.img`
  height: 36px;
  width: 36px;
  display: block;
  border-radius: 50%;
`;
const UserName = styled.span`
  font-weight: 600;
`;
const UserAction = styled.span``;
const UserTarget = styled.span`
  font-weight: 600;
`;

const Bottom = styled.div`
  font-size: 13px;
  line-height: 16px;

  /* identical to box height, or 123% */

  color: #565656;
  margin-left: 44px;
  margin-top: 5px;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
const ActivityListItem = ({ activity }) => {
  return (
    <Container>
      <Top>
        <UserImg src={activity.person.avatar} />
        <TopTextContainer>
          <TopText>
            <UserName>{activity.person.name} </UserName>
            <UserAction>{activity.action} </UserAction>
            <br />
            <UserTarget>{activity.target}</UserTarget>
          </TopText>
        </TopTextContainer>
      </Top>
      <Bottom>{activity.created_at}</Bottom>
    </Container>
  );
};

export default ActivityListItem;
