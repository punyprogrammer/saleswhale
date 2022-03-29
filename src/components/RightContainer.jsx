import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Topbar from "./Topbar";
import TeamsHeader from "./TeamsHeader";
import TeamsContent from "./TeamsContent";
import Activity from "./Activity";
import { teamsData } from "../data/mockData";
const Container = styled.div`
  width: calc(100vw - 80px);
  background-color: #e5e5e5;
  padding-bottom: 50px;
`;
const MainContent = styled.div`
  display: flex;
`;
const RightContainer = () => {
  const [filter, setFilter] = useState(null);
  const [teams, setTeams] = useState(teamsData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //function to filter teams
  const applyFilter = (filterName) => {
    const filteredResults = teamsData.filter(
      (team) => team[filterName] === true
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setFilter(filterName);
    setTeams(filteredResults);
  };
  //reset all teams
  const resetTeams = () => {
    setTeams(teamsData);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setFilter(null);
  };

  return (
    <Container>
      <Topbar />
      <TeamsHeader
        teams={teams}
        applyFilter={applyFilter}
        filter={filter}
        resetTeams={resetTeams}
      />
      <MainContent>
        <TeamsContent teams={teams} loading={loading} />
        <Activity />
      </MainContent>
    </Container>
  );
};

export default RightContainer;
