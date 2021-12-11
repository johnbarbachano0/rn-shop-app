import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Color from "../constants/Color";

const EditProducts = () => {
  return (
    <View style={styles.screen}>
      <TitleText>Edit Product</TitleText>
      <MainButton
        style={styles.mainButton}
        bgPress={Color.secondary.dark}
        bgUnpress={Color.secondary.light}
      >
        <Text style={styles.mainButtonText}>Press</Text>
      </MainButton>
    </View>
  );
};

export default EditProducts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  mainButton: {
    width: "40%",
    padding: 10,
    margin: 5,
  },
  mainButtonText: {
    fontFamily: "roboto",
    fontSize: 20,
    textAlign: "center",
  },
});
