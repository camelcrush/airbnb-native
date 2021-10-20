import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
  shadow-color: #000;
  shadow-opacity: 0.5;
`;

const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText>Search...</FakeText>
          </FakeBar>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingTop: 20 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                id={room.id}
                isFav={room.is_Fav}
                isSuperhost={room.user.superhost}
              />
            ))}
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Load More</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};
