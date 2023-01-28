import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeprator from "../components/ListItemSeprator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const Initialmessages = [
  {
    id: "1",
    title: "Hamza Ali",
    description: "My name is Hamza and I am doing job at Styllons Technologies",
    image: require("../assets/chair.jpg"),
  },
  {
    id: "2",
    title: "Muhammad Hamza",
    description: "Hey there! I am learning react native.",
    image: require("../assets/chair.jpg"),
  },
];
const MessagesScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(Initialmessages);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("working", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages(Initialmessages);
        }}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default MessagesScreen;
