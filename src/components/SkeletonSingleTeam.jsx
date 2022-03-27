import React, { useState } from "react";
import styled from "styled-components";
import ActiveStar from "../assets/star-active.svg";
import DefaultStar from "../assets/star-default.png";
import LeadsIcon from "../assets/icon-leads-small.png";
import CampaignIcon from "../assets/icon-conversations-small.png";
const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e4e7ec;
  border-radius: 4px;
  height: 181px;
  width: 307px;
  padding: 16px;
  padding-bottom: 0px;
  margin-bottom: 16px;
  animation: skeleton 1s ease infinite alternate;
  @keyframes skeleton {
    to {
      opacity: 0.3;
    }
  }
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
`;
const TeamLogo = styled.div`
  width: 36px;
  border-radius: 50%;
  height: 36px;
  background-color: #a19f9f;
`;
const TeamTopDesc = styled.div`
  margin-left: 12px;
`;
const TeamName = styled.div`
  height: 14px;
  width: 60px;
  background-color: #a19f9f;
  border-radius: 4px;
  color: #444444;
`;
const TeamCreatedAt = styled.div`
  margin-top: 6px;
  height: 14px;
  width: 60px;
  background-color: #a19f9f;
  border-radius: 4px;

  color: #565656;
`;
const TeamTopStar = styled.img`
  transition: all 0.3s ease;
  position: absolute;
  right: 0;
`;
const Center = styled.div`
  border-bottom: 1px solid #e4e7ec;
  padding: 18px 0px;
`;
const TeamCenterDesc = styled.div`
  height: 12px;
  width: 60%;
  margin-top: 6px;
  background-color: #a19f9f;
  border-radius: 4px;
`;
const TeamCenterDescText = styled.p`
  font-size: 14px;
  line-height: 17px;
  /* or 121% */

  color: #565656;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;
`;
const CampaignImage = styled.div`
  margin-right: 6px;
  background-color: #a19f9f;
  height: 20px;
  width: 20px;
`;
const CampaignText = styled.span`
  font-size: 13px;
  line-height: 16px;
  background-color: #a19f9f;

  /* identical to box height, or 123% */

  color: #000000;
  font-weight: 500;

  mix-blend-mode: normal;
  opacity: 0.45;
`;
const LeadsImage = styled.img`
  margin-right: 6px;
  margin-left: 20px;
  background-color: #a19f9f;
`;
const LeadsText = styled.span`
  font-size: 13px;
  line-height: 16px;
  background-color: #a19f9f;

  /* identical to box height, or 123% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.45;
  font-weight: 500;
`;
const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  background-color: #a19f9f;
`;
const BottomText = styled.div`
  background-color: #a19f9f;
  height: 12px;
  width: 80%;
  border-radius: 4px;
`;

const SingleTeam = ({ team }) => {
  const [starred, setStarred] = useState(true);

  return (
    <Container>
      <Top>
        <TeamLogo src={team.image} />
        <TeamTopDesc>
          <TeamName />
          <TeamCreatedAt />
        </TeamTopDesc>
      </Top>
      <Center>
        <TeamCenterDesc />
        <TeamCenterDesc />
      </Center>
      <Bottom>
        <BottomText />
      </Bottom>
    </Container>
  );
};

export default SingleTeam;
