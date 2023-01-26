import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListeningDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailContainers}>
        <Text style={styles.title}>Chair For Sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.listContainer}>
          <ListItem
            image={require("../assets/chair.jpg")}
            title="Muhammad Hamza"
            subTitle="3 Listneing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainers: {
    padding: 20,
  },
  listContainer: {
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListeningDetails;
