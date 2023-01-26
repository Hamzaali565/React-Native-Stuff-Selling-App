import React, { useState } from "react";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
const Category = [
  { label: "Furniture", value: "1" },
  { label: "Clothing", value: "2" },
  { label: "Cameras", value: "3" },
];
const CategoryScreen = () => {
  const [isNew, setIsNew] = useState(false);
  const [Categories, setCategories] = useState(Category[0]);
  return (
    <Screen>
      {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
      <AppPicker
        selectedItem={Categories}
        onSelectedItem={(item) => setCategories(item)}
        icon="apps"
        items={Category}
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
      {/* <AppTextInput placeholder="UserName" icon='email' /> */}
    </Screen>
  );
};

export default CategoryScreen;
