// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View
  , SafeAreaView, Image,
  TouchableWithoutFeedback,
  Button, Alert, Platform, StatusBar,
  Dimensions,
  Switch
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeImage from './app/screens/WelcomeImage';
import ViewScreen from './app/screens/ViewScreen';
import ListeningDetails from './app/screens/ListeningDetails';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import { useEffect, useState } from 'react';

import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import CategoryScreen from './app/screens/CategoryScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Check from './app/screens/Check';
import * as ImagePicker from 'expo-image-picker'
import ImageComponent from './app/components/ImageComponent';
import ImageInputList from './app/components/ImageInputList';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from './app/navigator/AuthNavigator';
import NavTheme from './app/navigator/NavTheme';
import AppNavigator from './app/navigator/AppNavigator';
export default function App() {

  const Link = ({ name }) => {
    const navigation = useNavigation();


    return (
      <Button title='Tab' onPress={() => navigation.navigate(name, { id: "1" })} />
    )
  }

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Link name="TweetsDetails" />
    </Screen>
  )

  const TweetsDetails = ({ route }) => (
    <Screen>
      <Text>
        Tweets Details
      </Text>
      <Link name="Tweets" />
    </Screen>
  )

  const Stack = createNativeStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "red"
      }}
    >
      <Stack.Screen name='Tweets' component={Tweets} />
      <Stack.Screen
        name='TweetsDetails'
        component={TweetsDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white"

        }}
      // ({ route }) => ({ title: route.params.id })
      />
    </Stack.Navigator>
  )
  const Tab = createBottomTabNavigator()
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: "black"


      }}
    >
      <Tab.Screen name='Feed' component={Tweets} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
      }} />
      <Tab.Screen name='Account' component={StackNavigator} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
      }} />

    </Tab.Navigator>
  )
  return (
    <NavigationContainer theme={NavTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
    // <TabNavigator />
    // < AccountScreen />
    // <ViewScreen />
  )

}




// reserve Code
{/* <Stack.Screen name='TweetsDets' component={LoginScreen} /> */ }

  //  //  <Screen>
//   {/* <ImageInputList
//         onAddImage={handleAdd}
//         onRemoveImage={handleDelete}
//         gimage={gImages} /> */}
//   // </Screen>;
//   // <WelcomeImage />
//   // <AccountScreen />
//   // <ListeningDetails />
//   // <MessagesScreen />
//   // <ListingScreen />
//   // <ViewScreen />
//   // <CategoryScreen />
//   // <LoginScreen />
//   // <ListingEditScreen />
//   // <Check />




//   //  <Screen>
//   {/* <ImageInputList
//       onAddImage={handleAdd}
//       onRemoveImage={handleDelete}
//       gimage={gImages} /> */}
//   // </Screen>;
//   // <WelcomeImage />
//   // <AccountScreen />
//   // <ListeningDetails />
//   // <MessagesScreen />
//   // <ListingScreen />
//   // <ViewScreen />
//   // <CategoryScreen />
//   // <LoginScreen />
//   // <ListingEditScreen />
//   // <Check />


// }

// // https://drive.google.com/drive/folders/10SrizHKbt6Ss9IWw9xEUvKcHr2_R68X7
// https://drive.google.com/drive/folders/12XjIqpPNfZSsO47U4W_fcQz8yYZUNSpy part2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
// {/* <SafeAreaView style={styles.container}> */ }
// {/* <Text>Open up App.</Text>
      // <Image source={require('./assets/favicon.png')} />
      // <Image
      //   fadeDuration={1000}
      //   blurRadius={5}
      //   source={{
      //     width: 200,
      //     height: 300,
      //     uri: "https://picsum.photos/200/300"
      //   }} /> */}
// // {/* <Button
//         title='Click Me'
//         onPress={() => {
//           clickMe()
//         }}
//       /> */}
// {/* <View style={{
//         // backgroundColor: "blur",
//         backgroundColor: "dodgerblue",
//         width: "100%",
//         height: landscape ? "100%" : "30%",
//       }}>
//         <Text>Hamza</Text>
//       </View>

//     </SafeAreaView> */}

//   //   console.log(useDeviceOrientation());
//   // const { landscape } = useDeviceOrientation();
//   // const clickMe = () => {
//     // console.log("Working");
//     // alert("Button Tapped")
//     // Alert.alert('Warning', 'Are You Sure', [
//     //   { text: "Yes" },
//     //   { text: "No" }
//     // ])
//     // Alert.prompt("My Title", "My Message", Text => console.log(Text)) IOS Specific
//   // }