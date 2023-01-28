import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigator/routes";

const Listings = [
  {
    id: 1,
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
const ListingScreen = ({ navigation }) => {
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
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS, item);
            }}
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
