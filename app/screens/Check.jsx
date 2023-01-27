import React from "react";
import { Text, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const Check = () => {
  return (
    <Screen
      style={{
        backgroudColor: "black",
      }}
    >
      <AppTextInput placeholder="Email" />
      <Text>Hamza</Text>
    </Screen>
  );
};

export default Check;
