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

export default () => {
  const navigation = useNavigation();
  return (
    <DissmissKeyboard>
      <Container>
        <SearchContainer>
          <SearchBar autoFocus={true} />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>Cancel</CancelText>
          </CancelContainer>
        </SearchContainer>
      </Container>
    </DissmissKeyboard>
  );
};
