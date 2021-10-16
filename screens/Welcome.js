import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Welcome</Text>
    <Button onPress={() => navigation.navigate("SignUp")} title={"Sign Up"} />
    <Button onPress={() => navigation.navigate("SignIn")} title={"Sign In"} />
  </View>
);
