import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Color from "../constants/Color";
import { ProductsStore } from "../context/ProductsContext";
import { ACTIONS } from "../context/Actions";

const Orders = () => {
  const { products, dispatchProducts } = useContext(ProductsStore);
  const { allProducts, orderedProducts, cartProducts } = products;

  // console.log(orderedProducts);

  return (
    <View style={styles.screen}>
      <TitleText>Orders</TitleText>
      <MainButton
        style={styles.mainButton}
        bgPress={Color.secondary.dark}
        bgUnpress={Color.secondary.light}
        onPress={() => {
          console.log(cartProducts);
        }}
      >
        <Text style={styles.mainButtonText}>Press</Text>
      </MainButton>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#bbb",
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
