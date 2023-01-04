import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Gallery } from "../pages/Gallery";
import { DetailPhoto } from "../pages/DetailPhoto";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";

export const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='App'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
           />
          <Stack.Screen
            name="Posts"
            component={Posts}
          />
          <Stack.Screen 
            name='Gallery' 
            component={Gallery}
          />
          <Stack.Screen 
            name='DetailPhoto' 
            component={DetailPhoto}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}