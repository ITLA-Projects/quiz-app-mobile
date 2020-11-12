import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "./src/components/Layouts/MainLayout";
import MainScreen from "./src/components/Screens/MainScreen";
import QuestionScreen from "./src/components/Screens/QuestionScreen";

export default function App() {
  //STATE
  //state related which screen you will show
  const [screen, setScreen] = useState("main");

  return (
    <MainLayout>
      {screen === "main" ? (
        <MainScreen screen={screen} setScreen={setScreen} />
      ) : (
        <QuestionScreen screen={screen} setScreen={setScreen} />
      )}

      <StatusBar style="auto" />
    </MainLayout>
  );
}
