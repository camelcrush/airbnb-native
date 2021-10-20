import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      if (action.payload.page === 1) {
        state.explore.rooms = action.payload.rooms;
        state.explore.page = 1;
      } else {
        action.payload.rooms.forEach((payloadRoom) => {
          const exists = state.explore.rooms.find(
            (savedRoom) => savedRoom.id === payloadRoom.id
          );
          if (!exists) {
            state.explore.rooms.push(payloadRoom);
          }
        });
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
  },
});

export const { setExploreRooms, increasePage } = roomsSlice.actions;

export const getRooms = (page) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export default roomsSlice.reducer;
