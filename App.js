import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const cacheImages = images => 
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () =>{
    const images = [require("./assets/loadingBg.jpeg"), "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"];
    const fonts = [Ionicons.font];
    const imagePromises = cacheImages(images);
    const fontPromises = cacheFonts(fonts);
    return Promise.all([...imagePromises, ...fontPromises]);
  };
  return isReady ? (<Text> I'm Ready</Text>) : (
    <AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadAssets} />
  );
}


