import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/Color";
import { Cart } from "../constants/Icons";

const CartButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
      <Cart style={styles.cartIcon} size={30} />
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartIcon: {
    color: Color.warning.dark,
  },
});
