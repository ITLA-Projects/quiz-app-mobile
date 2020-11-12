import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const MainLayout = ({ children }) => {
  return <SafeAreaView  style={styles.container}>{children}</SafeAreaView>;
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});
