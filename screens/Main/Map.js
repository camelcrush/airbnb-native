import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  position: absolute;
  bottom: 50px;
`;

const RoomContainer = styled.View`
  background-color: transparent;
  width: ${width}px;
  align-items: center;
`;

const RoomCard = styled.View`
  background-color: white;
  width: ${width - 80}px;
  height: 200px;
  margin-right: 20px;
`;

const RoomName = styled.Text``;

const Map = ({ rooms }) => {
  return (
    <Container>
      <MapView style={StyleSheet.absoluteFill} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
      >
        {rooms?.map((room) => (
          <RoomContainer key={room.id}>
            <RoomCard>
              <RoomName>{room.name}</RoomName>
            </RoomCard>
          </RoomContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

function mapStateToProps(state) {
  return { rooms: state.roomsReducer.explore.rooms };
}

export default connect(mapStateToProps)(Map);
