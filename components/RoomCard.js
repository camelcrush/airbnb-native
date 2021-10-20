import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => null;

RoomCard.proptypes = {
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RoomCard;
