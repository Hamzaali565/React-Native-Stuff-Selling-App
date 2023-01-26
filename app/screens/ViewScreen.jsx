import React from "react";
import { Image, Platform, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeWindow}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.DeleteWindow}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  closeWindow: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  DeleteWindow: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewScreen;
