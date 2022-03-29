import React from "react";
import styled from "styled-components";
import TeamsIcon from "../assets/companies.svg";
import PlusIcon from "../assets/add.svg";
import SearchIcon from "../assets/icon-search.svg";
const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px rgba(0, 0, 0, 0.05), 0px 0px rgba(0, 0, 0, 0.1);
  height: 146px;
  padding: 30px 0px 38px 38px;
  padding-bottom: 0px;
  padding-right: 38px;
  box-shadow: 8px 0px 0px rgba(0, 0, 0, 0.3);
  /* -webkit-box-shadow: 12px 10px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 12px 10px 4px rgba(0, 0, 0, 0.3); */
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LeftTop = styled.div`
  display: flex;
`;
const LeftTopImage = styled.img``;
const LeftTopText = styled.h1`
  color: #1a1919;
  font-size: 30px;
  font-weight: 600;
  margin-left: 8px;
`;
const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 46px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;
const FilterText = styled.h1`
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 22px;
  font-weight: 600;
  transition: all 0.3s ease-in;
`;
const FilterShade = styled.div`
  height: 4px;
  background-color: #fff;
  background-color: ${(props) => props.selected && "#0083e3"};
  width: calc(120% + 16px);
  transition: all 0.3s ease-in;
`;
const Filter = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    ${FilterText} {
      color: #0083e3;
    }
    ,
    ${FilterShade} {
      /* background-color: #0083e3; */
    }
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const CreateButton = styled.button`
  border: none;
  outline: none;
  height: 36px;
  width: 186px;
  font-weight: 400;
  background-color: #40d2bf;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const AddIcon = styled.img``;
const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 13px;
  margin-right: 86px;
  align-items: center;
`;
const SearchImage = styled.img``;
const SearchInput = styled.input`
  color: #999999;
  border: none;
  margin-left: 12px;
  font-size: 16px;
  outline: none;

  font-weight: 600;
`;
const TeamsHeader = ({filter,applyFilter,resetTeams}) => {
  return (
    <Container>
      <LeftContainer>
        <LeftTop>
          <LeftTopImage src={TeamsIcon} />
          <LeftTopText>Teams</LeftTopText>
        </LeftTop>
        <LeftBottom>
          <FilterContainer>
            <Filter onClick={resetTeams}>
              <FilterText>All</FilterText>
              <FilterShade selected={filter===null}></FilterShade>
            </Filter>
            <Filter onClick={()=>applyFilter('is_favorited')}>
              <FilterText>Favourites</FilterText>
              <FilterShade selected={filter==='is_favorited'}></FilterShade>
            </Filter>
            <Filter onClick={()=>applyFilter('is_archived')}>
              <FilterText>Archived</FilterText>
              <FilterShade selected={filter==='is_archived'}></FilterShade>
            </Filter>
          </FilterContainer>
        </LeftBottom>
      </LeftContainer>
      <RightContainer>
        <CreateButton>
          <AddIcon src={PlusIcon} />
          CREATE NEW TEAM
        </CreateButton>
        <SearchContainer>
          <SearchImage src={SearchIcon} />
          <SearchInput
            type="text"
            placeholder="Search Team Name...."
          ></SearchInput>
        </SearchContainer>
      </RightContainer>
    </Container>
  );
};

export default TeamsHeader;
