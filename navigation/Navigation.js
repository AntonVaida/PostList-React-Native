import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        </Stack.Navigator>
      </NavigationContainer>
    )
}