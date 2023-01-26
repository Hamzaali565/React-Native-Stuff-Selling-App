import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Icons from "../components/Icons";

const CategoryPickerItem = ({ item, label, onPress }) => {
  return (
    <View style={styles.container}>
      <Icons
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPickerItem;
