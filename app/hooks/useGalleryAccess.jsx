import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const useGalleryAccess = () => {
  const [gImages, setGImages] = useState();
  const resultPermision = async () => {
    const resul = await ImagePicker.requestCameraPermissionsAsync();
    if (!resul.granted) {
      alert("you need to enable it to access library");
    }
  };

  //   by calling this function on click gellery will open

  //   const SubmitHandler = async () => {
  //     try {
  //       const result = await ImagePicker.launchImageLibraryAsync();
  //       if (!result.canceled) setGImages(result.assets[0].uri);
  //       // console.log(gImage);
  //     } catch (error) {
  //       console.log("Error ", error);
  //     }
  //   };

  useEffect(() => {
    resultPermision();
  }, []);
  return "gImages";
};
