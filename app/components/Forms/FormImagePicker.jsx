import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleDelete = (uri) => {
    setFieldValue(
      name,
      values[name].filter((image) => image !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        gimage={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleDelete}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
