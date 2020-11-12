import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import { Button } from "react-native-elements";
import { data } from "../../helpers/dummyData";
import { shuffle } from "../../helpers/shuffleArray";

//images
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";

const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const QuestionScreen = ({ screen, setScreen }) => {
  //STATE
  //all questions
  const [allQuestions, setAllQuestions] = useState(data);
  //current question
  const [actualQuestion, setActualQuestion] = useState(1);
  //all stored answers
  const [storedAns, setStoredAns] = useState([]);
  //show current answers
  const [showAns, setShowAns] = useState(false);
  //show color of selected answer
  const [showAnswerBaby, setShowAnswerBaby] = useState(0);

  //HANDLERS
  const handleRestart = () => {
    setShowAns(false);
    setShowAnswerBaby(0);
    setStoredAns([]);
    setActualQuestion(1);
  };

  const handleBackToMenu = () => {
    //idk how, just back
    setScreen("main");
  };

  const handlePressedAns = (id, status) => {
    //store the new Answer
    let newArr = storedAns;
    newArr.push(status);
    setStoredAns(newArr);

    //is the answer correct or incorrect? chack it
    setShowAnswerBaby(id);

    //unlock the new answer
    setShowAns(true);
  };

  const handleNextQuestion = () => {
    //upgrade question
    const next = actualQuestion + 1;

    //collect points
    let counter = 0;
    storedAns.forEach((element) => {
      if (element) {
        counter = counter + 10;
      }
    });

    if (allQuestions.length >= next) {
      //move to next question
      setActualQuestion(next);
    } else {
      //finish this
      Alert.alert(
        "Has Terminado tu Quiz",
        `Tu puntuacion ha sido de ${counter}% . Deseas intentar denuevo?`,
        [
          { text: "Si, Reintentar", onPress: handleRestart },
          { text: "No, volver al menu", onPress: handleBackToMenu },
        ]
      );
    }
    //so anyways
    //blank options
    setShowAnswerBaby(0);
    //new answaer until shows
    setShowAns(false);
  };

  return (
    <React.Fragment>
      {shuffle(allQuestions)
        .filter(({ id }) => id === actualQuestion)
        .map((question) => (
          <React.Fragment key={question.id}>
            <View style={styles.body}>
              <Text style={styles.bodyTitle}>Pregunta #{question.id}</Text>
              <Text style={styles.bodyContent}>{question.question}</Text>
              <Image
                source={imgArray[question.id - 1]}
                style={styles.headImg}
              />
            </View>

            <View style={styles.head}>
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  title={option.response}
                  onPress={() => handlePressedAns(option.id, option.status)}
                  type="outline"
                  raised
                  buttonStyle={[
                    styles.buttonStyle,
                    showAnswerBaby === option.id && {
                      backgroundColor: option.status ? "green" : "red",
                    },
                  ]}
                  containerStyle={[
                    styles.containerStyle,
                    showAnswerBaby === option.id && {
                      backgroundColor: option.status ? "green" : "red",
                    },
                  ]}
                  titleStyle={{
                    color:
                      showAns && showAnswerBaby === option.id
                        ? "white"
                        : "black",
                  }}
                />
              ))}
            </View>
            <View>
              <Button
                title={showAns ? "Siguiente Pregunta" : "Responde Primero"}
                disabled={!showAns}
                onPress={() => handleNextQuestion()}
              />
            </View>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  head: {
    backgroundColor: "white",
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headImg: {
    width: 150,
    height: 150,
    borderRadius:50
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
    marginBottom: 10,
  },
  bodyContent: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonStyle: {
    maxWidth: "80%",
    minWidth: "80%",
    borderRadius:30
  },
  containerStyle: {
    margin: "auto",
    marginVertical: 7,
    borderRadius:30
  },
});
