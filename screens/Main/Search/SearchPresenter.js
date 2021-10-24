import React from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components/native";
import DissmissKeyboard from "../../../components/DismissKeyboard";

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

export default () => {
  const navigation = useNavigation();
  return (
    <DissmissKeyboard>
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
          contentContainerStyle={{ paddigVertical: 10, paddingHorizontal: 20 }}
        >
          <FilterContainer>
            <FilterLabel>Beds</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bedrooms</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Bathrooms</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>Max. Price</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
        </FiltersContainer>
      </Container>
    </DissmissKeyboard>
  );
};
