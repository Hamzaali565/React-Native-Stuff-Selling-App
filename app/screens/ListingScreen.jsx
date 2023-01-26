import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Listings = [
  {
    id: 2,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];
const ListingScreen = () => {
  return (
    <Screen style={styles.mainData}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  mainData: {
    marginTop: 10,
    padding: 20,
    backgroundColor: colors.mediumGrey,
  },
});
export default ListingScreen;
