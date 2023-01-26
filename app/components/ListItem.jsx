import React from "react";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
const ListItem = ({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  style,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.mediumGrey} onPress={onPress}>
          <View style={[styles.container, style]}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.TextContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              style={{ color: defaultStyles.colors.grey }}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    // marginBottom: 10,
  },
  TextContainer: {
    // alignItems: "center",
    // marginVertical: 10,
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
