import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icons from "../components/Icons";
import ListItem from "../components/ListItem";
import ListItemSeprator from "../components/ListItemSeprator";
import Screen from "../components/Screen";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Muhammad Hamza"
          subTitle="alimuhammadhamza402@gmail.com"
          image={require("../assets/chair.jpg")}
        />
      </View>
      <View style={styles.data}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icons
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        style={styles.LogOut}
        title="Log Out"
        ImageComponent={<Icons name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.mediumGrey,
  },
  container: {
    marginTop: 10,
    // justifyContent: "center",
    // alignContent: "center",
  },
  data: {
    marginTop: 30,
  },
  LogOut: {
    marginTop: 20,
  },
});
export default AccountScreen;
