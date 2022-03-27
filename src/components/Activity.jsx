import React from "react";
import styled from "styled-components";
import ActivityListItem from "./ActivityListItem";
import { activityData } from "../data/mockData";
const Container = styled.div`
  position: sticky;
  top: 62px;
  height: 460px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
  /* height: 460px; */
  width: 316px;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 42px;
  /* max-height: auto; */
`;
const ActivityHeader = styled.div`
  height: 68px;
  border-bottom: 1px solid #efefef;
  padding: 30px;
  display: flex;
  align-items: center;
`;
const ActivityHeaderText = styled.h1`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;

  /* identical to box height, or 122% */

  color: #343434;
`;
const ActivityList = styled.div`
  padding: 30px;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Activity = () => {
  return (
    <Container>
      <ActivityHeader>
        <ActivityHeaderText>Activity</ActivityHeaderText>
      </ActivityHeader>
      <ActivityList>
        {activityData.map((item) => (
          <ActivityListItem key={item.id} activity={item} />
        ))}
      </ActivityList>
    </Container>
  );
};

export default Activity;
