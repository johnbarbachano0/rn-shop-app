import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "lobster",
    fontSize: 50,
    padding: 10,
  },
});
