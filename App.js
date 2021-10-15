import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Asset } from 'expo-asset';

const cacheImages = images => 
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () =>{
    const images = [require("./assets/loadingBg.jpeg"), "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"];
    console.log(cacheImages(images));
  };
  return isReady ? (<Text> I'm Ready</Text>) : (
    <AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadAssets} />
  );
}


