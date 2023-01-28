import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import ListeningDetails from "../screens/ListeningDetails";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ animation: "simple_push", headerShown: false }}
  >
    <Stack.Screen
      name="Listings"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ListingDetails" component={ListeningDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
