import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const ImageComponent = ({ gimage, onChangeImage }) => {
  useEffect(() => {
    resultPermision();
  }, []);
  const resultPermision = async () => {
    const resul = await ImagePicker.requestCameraPermissionsAsync();
    if (!resul.granted) {
      alert("you need to enable it to access library");
    }
  };
  const handlePress = () => {
    if (!gimage) SubmitHandler();
    else
      Alert.alert("Delete", "Are you sure you want to delete this?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const SubmitHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);

      // console.log(gImage);
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!gimage && (
          <MaterialCommunityIcons name="camera" size={30} color={colors.grey} />
        )}
        {gimage && <Image source={{ uri: gimage }} style={styles.image} />}
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.mediumGrey,
  },
  image: {
    width: "100%",
    height: "100%",
    // marginRight: 10,
  },
});
export default ImageComponent;
