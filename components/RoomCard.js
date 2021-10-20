import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
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

const RoomCard = ({ id, isFav, isSuperhost, photos, name, price }) => (
  <Container>
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
