import React from "react";
import { Text } from "react-native";

const LabelText = (props) => {
  return (
    <Text {...props} style={{ fontFamily: "roboto-bold", ...props.style }}>
      {props.children}
    </Text>
  );
};

export default LabelText;
