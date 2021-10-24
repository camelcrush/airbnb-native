import React from "react";
import styled from "styled-components/native";
import DissmissKeyboard from "../../../components/DismissKeyboard";
import colors from "../../../colors";
import { ActivityIndicator } from "react-native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View``;

const SearchContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-offset: 5px 5px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
  padding: 5px;
`;

const FilterContainer = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const FilterLabel = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Filter = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  width: 80px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-offset: 0px 1px;
`;

const SearchBtn = styled.TouchableOpacity`
  background-color: ${colors.red};
  padding: 10px;
  margin: 10px 30px;
  border-radius: 10px;
  align-items: center;
`;

const SearchText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const ResultsText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;

const Results = styled.ScrollView`
  margin-top: 25px;
`;

export default ({
  navigation,
  beds,
  setBeds,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  maxPrice,
  setMaxPrice,
  searching,
  triggerSearch,
  results,
}) => (
  <DissmissKeyboard>
    <>
      <Container>
        <SearchContainer>
          <SearchBar autoFocus={true} placeholder="Search by City..." />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>Cancel</CancelText>
          </CancelContainer>
        </SearchContainer>
        <FiltersContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddigVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <FilterContainer>
            <FilterLabel>Beds</FilterLabel>
            <Filter
              onChangeText={(text) => setBeds(text)}
              value={beds}
              placeholder="0"
              keyboardType={"number-pad"}
            />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bedrooms</FilterLabel>
            <Filter
              onChangeText={(text) => setBedrooms(text)}
              value={bedrooms}
              placeholder="0"
              keyboardType={"number-pad"}
            />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bathrooms</FilterLabel>
            <Filter
              onChangeText={(text) => setBathrooms(text)}
              value={bathrooms}
              placeholder="0"
              keyboardType={"number-pad"}
            />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Max. Price</FilterLabel>
            <Filter
              onChangeText={(text) => setMaxPrice(text)}
              value={maxPrice}
              placeholder="$0"
              keyboardType={"number-pad"}
            />
          </FilterContainer>
        </FiltersContainer>
      </Container>
      <SearchBtn onPress={searching ? null : triggerSearch}>
        {searching ? (
          <ActivityIndicator color="white" />
        ) : (
          <SearchText>Search</SearchText>
        )}
      </SearchBtn>
      {results ? (
        <ResultsText>Showing {results.count} results</ResultsText>
      ) : null}
      <Results contentContainerStyle={{ paddingHorizontal: 15 }}>
        {results?.results?.map((room) => (
          <RoomCard
            key={room.id}
            name={room.name}
            price={room.price}
            photos={room.photos}
            id={room.id}
            isFav={room.is_fav}
            isSuperhost={room.user.superhost}
            roomObj={room}
          />
        ))}
      </Results>
    </>
  </DissmissKeyboard>
);
