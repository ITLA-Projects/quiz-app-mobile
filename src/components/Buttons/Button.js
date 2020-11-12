import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Btn = ({ label = "example", onPressHandler }) => {
  return (
    <Button
      title={label}
      onPress={onPressHandler && onPressHandler}      
      color="#7C72FF"
    />
  );
};

export default Btn;

const styles = StyleSheet.create({

});
