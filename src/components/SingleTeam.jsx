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
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
`;
const TeamLogo = styled.img`
  width: 36px;

  height: 36px;
`;
const TeamTopDesc = styled.div`
  margin-left: 12px;
`;
const TeamName = styled.h1`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;

  color: #444444;
`;
const TeamCreatedAt = styled.h1`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;

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
  height: 34px;
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
const CampaignImage = styled.img`
  margin-right: 6px;
`;
const CampaignText = styled.span`
  font-size: 13px;
  line-height: 16px;

  /* identical to box height, or 123% */

  color: #000000;
  font-weight: 500;

  mix-blend-mode: normal;
  opacity: 0.45;
`;
const LeadsImage = styled.img`
  margin-right: 6px;
  margin-left: 20px;
`;
const LeadsText = styled.span`
  font-size: 13px;
  line-height: 16px;

  /* identical to box height, or 123% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.45;
  font-weight: 500;
`;
// const IconContainer = styled.div`
//   height: 30px;
//   width: 30px;
// `;

const SingleTeam = ({ team }) => {
  const [starred, setStarred] = useState(false);

  return (
    <Container>
      <Top>
        <TeamLogo src={team.image} />
        <TeamTopDesc>
          <TeamName>{team.name}</TeamName>
          <TeamCreatedAt>{team.created_at}</TeamCreatedAt>
        </TeamTopDesc>
        <TeamTopStar onClick={()=>setStarred(!starred)}src={starred ? ActiveStar : DefaultStar} />
      </Top>
      <Center>
        <TeamCenterDesc>
          <TeamCenterDescText>{team.description}</TeamCenterDescText>
        </TeamCenterDesc>
      </Center>
      <Bottom>
        <CampaignImage src={CampaignIcon} />
        <CampaignText>{team.campaigns_count} Campaigns</CampaignText>
        <LeadsImage src={LeadsIcon} />
        <LeadsText>{team.leads_count}</LeadsText>
      </Bottom>
    </Container>
  );
};

export default SingleTeam;
