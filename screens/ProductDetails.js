import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Color from "../constants/Color";
import { PortraitContext } from "../context/OrientationContext";
import { ProductsStore } from "../context/ProductsContext";
import { ACTIONS } from "../context/Actions";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
const isApple = Platform.OS === "ios";

const ProductDetails = ({ navigation, route }) => {
  const { id } = route.params;
  const { isPortrait } = useContext(PortraitContext);
  const { products, dispatchProduct } = useContext(ProductsStore);
  const { allProducts, cartProducts } = products;
  console.log("Prod Details");
  console.log(products.cartProducts);
  const details = allProducts.filter((product) => product.id === id)[0];
  const cartItem = cartProducts.filter((product) => product.id === id)[0];
  const itemNotInCart =
    cartProducts.filter((products) => (products.id = id)).length === 0;

  return (
    <View style={styles.screen}>
      <Image
        style={isPortrait ? styles.imagePortrait : styles.imageLandscape}
        source={{
          uri: details.imageUrl,
        }}
      />
      <ScrollView style={styles.detailsCont}>
        <BodyText style={styles.price}>
          ${details.price.toLocaleString()}
        </BodyText>
        <BodyText style={styles.description}>{details.description}</BodyText>
      </ScrollView>
      <View style={styles.buttonCont}>
        <MainButton
          style={styles.button}
          bgPress={Color.highlight.dark}
          bgUnpress={Color.highlight.light}
          onPress={() =>
            dispatchProduct({
              type: ACTIONS.ADD_TO_CART,
              payload: { id: id },
            })
          }
        >
          <Text style={styles.buttonText}>
            Add to Cart {cartItem && `( ${cartItem.qty} )`}
          </Text>
        </MainButton>
        <MainButton
          style={styles.button}
          bgPress={Color.highlight.dark}
          bgUnpress={itemNotInCart ? "gray" : Color.highlight.light}
          disabled={itemNotInCart ? true : false}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.buttonText}>Buy Now</Text>
        </MainButton>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddd",
    justifyContent: "flex-start",
  },
  imagePortrait: {
    width: "100%",
    height: "50%",
  },
  imageLandscape: {
    width: "40%",
    height: "100%",
  },
  detailsCont: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexGrow: isApple ? 3 : 1,
  },
  price: {
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
  },
  buttonCont: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  button: {
    borderRadius: 0,
    margin: 0,
    padding: 20,
    paddingBottom: isApple ? 40 : 20,
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
