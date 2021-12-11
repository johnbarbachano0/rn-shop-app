import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";

const Card = (props) => {
  return (
    <View {...props} style={{ ...styles.screen, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  screen: {
    borderRadius: 10,
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    overflow: "hidden",
  },
});
