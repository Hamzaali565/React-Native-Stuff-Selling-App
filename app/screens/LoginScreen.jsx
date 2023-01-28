import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as ImagePicker from "expo-image-picker";

import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import { useGalleryAccess } from "../hooks/useGalleryAccess";
import { useLayoutEffect } from "react/cjs/react.development";
import { useLocation } from "../hooks/useLocation";
import AppButton from "../components/AppButton";
import routes from "../navigator/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const galleryAccess = useGalleryAccess();
  const location = useLocation();

  const SubmitHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImages(result.assets[0].uri);
      // console.log(gImage);
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(galleryAccess, location)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        {/* <AppButton onPress={SubmitHandler} /> */}
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
