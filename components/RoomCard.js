import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import utils from "../utils";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";
import { useNavigation } from "@react-navigation/core";
import RoomPhotos from "./RoomPhotos";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
  position: relative;
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

const FavsButton = styled.View`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;

function getIconName(isFav) {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return "md-heart";
    }
    return "md-heart-outline";
  } else {
    if (isFav) {
      return "ios-heart";
    }
    return "ios-heart-outline";
  }
}

const RoomCard = ({ id, isFav, isSuperhost, photos, name, price, roomObj }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <TOpacity onPress={() => dispatch(toggleFav(id))}>
        <FavsButton>
          <Ionicons
            size={28}
            color={isFav ? colors.red : colors.black}
            name={getIconName(isFav)}
          />
        </FavsButton>
      </TOpacity>
      <RoomPhotos photos={photos} />
      <TouchableOpacity
        style={{ alignItems: "flex-start" }}
        onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}
      >
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
      </TouchableOpacity>
    </Container>
  );
};

RoomCard.proptypes = {
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperhost: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roomObj: PropTypes.object.isRequired,
};

export default RoomCard;
