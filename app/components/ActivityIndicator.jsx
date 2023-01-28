import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      loop
      autoPlay
      source={require("../assets/animations/Loading.json")}
    />
  );
};

export default ActivityIndicator;
