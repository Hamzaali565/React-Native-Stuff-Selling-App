import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Text,
  Modal,
  Button,
  FlatList,
  // TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/Styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";
import AppText from "./AppText";
const AppPicker = ({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  selectedItem,
  onSelectedItem,
  width = "100%",
  PickerItemComponent = PickerItem,
  ...otherProps
}) => {
  const [ModalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.grey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText onPress={() => setModalVisible(true)} style={styles.text}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText
              onPress={() => setModalVisible(true)}
              style={styles.placeholder}
            >
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            onPress={() => {
              setModalVisible(true);
            }}
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.grey}
          />
        </View>
        <Modal visible={ModalVisible} animationType="slide">
          <Button title="closed" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Modal>
      </TouchableWithoutFeedback>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.mediumGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.grey,
  },
});
export default AppPicker;
