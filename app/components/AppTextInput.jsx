import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/Styles";
const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, { width: "100%" }]}
        placeholderTextColor={defaultStyles.colors.grey}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.mediumGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    // flex: 1,
  },

  icon: {
    marginRight: 10,
    // flex: ,
  },
});
export default AppTextInput;
