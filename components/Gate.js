import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../navigation/Auth";
import { logIn, logOut } from "../redux/usersSlice";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../navigation/Main";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
