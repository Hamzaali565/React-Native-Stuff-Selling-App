import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/Forms";
import FormImagePicker from "../components/Forms/FormImagePicker";
import Screen from "../components/Screen";
import CategoryPickerItem from "./CategoryPickerItem";
import * as Location from "expo-location";
import { useLocation } from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().label("Category"),
  image: Yup.array().min(1, "Please Select atleast one Image"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "lock" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "black",
    icon: "gamepad",
  },
  { label: "Wear", value: 5, backgroundColor: "orange", icon: "shoe-heel" },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "brown",
    icon: "star",
  },
  { label: "Music", value: 7, backgroundColor: "red", icon: "music" },
  { label: "Books", value: 8, backgroundColor: "purple", icon: "book" },
  { label: "Others", value: 9, backgroundColor: "gray", icon: "chevron-right" },
];
const ListingEditScreen = () => {
  // const [Categories, setCategories] = useState(Category[0]);
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          image: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="image" />
        <AppFormField maxLenght={225} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLenght={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={140}
        />
        <AppFormField
          maxLenght={225}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
