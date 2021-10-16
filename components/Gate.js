import React from "react";
import {Text, View} from "react-native";

export default () => {
    const isLoggedIn = false;
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}> 
        {isLoggedIn ? <Text>Welcome</Text> : <Text>Login please</Text>}
        </View>
    );
};