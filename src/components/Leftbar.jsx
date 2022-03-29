import React from "react";
import styled from "styled-components";
import LogoIcon from "../assets/Path.svg";
import CampaignIcon from "../assets/campaign.svg";
import TeamsIcon from "../assets/teams.svg";
import LeadsIcon from "../assets/leads.svg";
import ReportsIcon from "../assets/reports.svg";
import helpIcon from "../assets/help.svg";
const Container = styled.div`
  top: 0;
  position: sticky;
`;
const Wrapper = styled.div`
  height: 100vh;

  background-color: #042235;
  width: 80px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5),
    inset -4px 0px 4px rgba(2, 15, 24, 0.569466);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Top = styled.div``;
const Bottom = styled.div``;
const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.selected && "#2995DA"};
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #2995da;
    cursor:pointer;
  }
`;
const IconImg = styled.img``;

const Leftbar = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <IconContainer>
            <IconImg src={LogoIcon} />
          </IconContainer>
          <IconContainer>
            <IconImg src={CampaignIcon} />
          </IconContainer>
          <IconContainer selected>
            <IconImg src={TeamsIcon} />
          </IconContainer>
          <IconContainer>
            <IconImg src={LeadsIcon} />
          </IconContainer>
          <IconContainer>
            <IconImg src={ReportsIcon} />
          </IconContainer>
        </Top>
        <Bottom>
          <IconContainer>
            <IconImg src={helpIcon} />
          </IconContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Leftbar;
