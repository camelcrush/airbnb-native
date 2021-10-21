import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View } from "react-native";
import Swiper from "react-native-web-swiper";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-top: 7px;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${height / 4}px;
  border-radius: 4px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomCard = ({ id, isFav, isSuperhost, photos, name, price }) => (
  <Container>
    <PhotosContainer>
      {photos.length === 0 ? (
        <SlideImage
          resizeMode="repeat"
          source={require("../assets/roomDefault.jpeg")}
        />
      ) : (
        <Swiper
          controlsProps={{
            PrevComponent: () => null,
            NextComponent: () => null,
            dotActiveStyle: {
              backgroundColor: "white",
            },
          }}
        >
          {photos.map((photo) => (
            <View key={photo.id}>
              <SlideImage source={{ uri: photo.file }} />
            </View>
          ))}
        </Swiper>
      )}
    </PhotosContainer>
    {isSuperhost ? (
      <Superhost>
        <SuperhostText>Superhost</SuperhostText>
      </Superhost>
    ) : null}
    <Name>{name}</Name>
    <PriceContainer>
      <PriceNumber>${price}</PriceNumber>
      <PriceText> / night</PriceText>
    </PriceContainer>
  </Container>
);

RoomCard.proptypes = {
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperhost: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RoomCard;
