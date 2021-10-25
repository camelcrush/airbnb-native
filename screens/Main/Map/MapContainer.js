import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import MapPresenter from "./MapPresenter";

const { width, height } = Dimensions.get("screen");

export default ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };
  const moveMap = () => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 1000 }
    );
  };
  useEffect(() => {
    if (currentIndex !== 0) {
      moveMap();
    }
  }, [currentIndex]);
  return (
    <MapPresenter
      rooms={rooms}
      mapRef={mapRef}
      currentIndex={currentIndex}
      onScroll={onScroll}
    />
  );
};
