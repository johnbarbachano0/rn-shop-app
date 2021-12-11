import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Color from "../constants/Color";

const ManageProducts = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Manage Products</TitleText>
      <MainButton
        style={styles.mainButton}
        bgPress={Color.secondary.dark}
        bgUnpress={Color.secondary.light}
        onPress={() => navigation.navigate("EditProducts")}
      >
        <Text style={styles.mainButtonText}>Press</Text>
      </MainButton>
    </View>
  );
};

export default ManageProducts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ccc",
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
