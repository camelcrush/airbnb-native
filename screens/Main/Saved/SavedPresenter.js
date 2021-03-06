import React from "react";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Nofavs = styled.Text``;

export default ({ rooms }) => (
  <Container>
    <Title>Favorites ({rooms.length})</Title>
    <SV
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {rooms.length !== 0 ? (
        rooms.map((room) => (
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
        ))
      ) : (
        <Nofavs>You don't have any favs.</Nofavs>
      )}
    </SV>
  </Container>
);
