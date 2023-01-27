import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./ImageComponent";

const ImageInputList = ({ gimage = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={scrollView}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd();
        }}
      >
        <View style={styles.container}>
          {gimage.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageComponent
                gimage={uri}
                // key={uri}
                onChangeImage={() => {
                  onRemoveImage(uri);
                }}
              />
            </View>
          ))}
          <ImageComponent sty onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
    // marginRight: 10,
    // overflow: "hidden",
  },
  image: {
    margin: 10,
  },
});
export default ImageInputList;
