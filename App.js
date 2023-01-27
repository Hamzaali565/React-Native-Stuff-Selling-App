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


export default function App() {
  // const [gImages, setGImages] = useState([]);
  // const resultPermision = async () => {
  //   const resul = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!resul.granted) {
  //     alert("you need to enable it to access library")
  //   }
  // }
  // useEffect(() => {
  //   resultPermision()
  // }, [])
  // const SubmitHandler = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.canceled) setGImage(result.assets[0].uri)
  //     // console.log(gImage);
  //   } catch (error) {
  //     console.log("Error ", error);
  //   }
  // }
  // const handleAdd = uri => {
  //   setGImages([...gImages, uri])
  // }
  // const handleDelete = uri => {
  //   setGImages(gImages.filter(image => image !== uri))
  // }
  return (
    // <CategoryScreen />
    // <ListingEditScreen />
    <LoginScreen />
  )

  //  <Screen>
  {/* <ImageInputList
      onAddImage={handleAdd}
      onRemoveImage={handleDelete}
      gimage={gImages} /> */}
  // </Screen>;
  // <WelcomeImage />
  // <AccountScreen />
  // <ListeningDetails />
  // <MessagesScreen />
  // <ListingScreen />
  // <ViewScreen />
  // <CategoryScreen />
  // <LoginScreen />
  // <ListingEditScreen />
  // <Check />


}
// // https://drive.google.com/drive/folders/10SrizHKbt6Ss9IWw9xEUvKcHr2_R68X7
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
{/* <SafeAreaView style={styles.container}> */ }
{/* <Text>Open up App.</Text>
      <Image source={require('./assets/favicon.png')} />
      <Image
        fadeDuration={1000}
        blurRadius={5}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }} /> */}
{/* <Button
        title='Click Me'
        onPress={() => {
          clickMe()
        }}
      /> */}
{/* <View style={{
        // backgroundColor: "blur",
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? "100%" : "30%",
      }}>
        <Text>Hamza</Text>
      </View>

    </SafeAreaView> */}

  //   console.log(useDeviceOrientation());
  // const { landscape } = useDeviceOrientation();
  // const clickMe = () => {
    // console.log("Working");
    // alert("Button Tapped")
    // Alert.alert('Warning', 'Are You Sure', [
    //   { text: "Yes" },
    //   { text: "No" }
    // ])
    // Alert.prompt("My Title", "My Message", Text => console.log(Text)) IOS Specific
  // }