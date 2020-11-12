import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";

export const headImg = require("../../images/boygirl.png");

const MainScreen = ({screen,setScreen}) => {

  //HANDLERS
  //hnadler related with the change screen
  const handleGoToQuestions = ()=>{
    setScreen('question')
  }

  return (
    <React.Fragment>
      <View style={styles.head}>
        <Image source={headImg} resizeMode="contain" style={styles.headImg} />
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Quiz App</Text>
        <Text style={styles.bodyContent}>
          Demuestra tus conocimientos respondiendo a estas preguntas!
        </Text>
        <Button title="Empezar Quiz" onPress={handleGoToQuestions}/>
      </View>
    </React.Fragment>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  head: {
    backgroundColor: "white",
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headImg: {
    width: "75%",
  },
  body: {
    backgroundColor: "#23329B",
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  bodyTitle: {
    color: "white",
    fontSize: 30,
    marginBottom: 25,
  },
  bodyContent: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom:30,
  },
});
