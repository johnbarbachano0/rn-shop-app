import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import Color from "../constants/Color";
import { PortraitContext } from "../context/OrientationContext";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
const isApple = Platform.OS === "ios";

const ProductList = ({ products, navigation }) => {
  const { isPortrait } = useContext(PortraitContext);

  const cardPressHandler = (id) => {
    navigation.navigate("ProductDetails", { id });
  };

  const cardHandler = (product) => {
    return (
      <Card
        key={product.id}
        style={
          isPortrait
            ? { ...styles.cardPortrait, ...styles.card }
            : { ...styles.cardLandscape, ...styles.card }
        }
      >
        <TouchableWithoutFeedback onPress={() => cardPressHandler(product.id)}>
          <Image
            style={styles.cardImage}
            source={{
              uri: product.imageUrl,
            }}
          />
          <View style={styles.cardDetails}>
            <BodyText style={styles.productTitle} numberOfLines={1}>
              {product.productName}
            </BodyText>
            <BodyText style={styles.productPrice} numberOfLines={1}>
              ${product.price.toLocaleString()}
            </BodyText>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    );
  };
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.cardListCont}>
        {products.map((product) => cardHandler(product))}
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  cardListCont: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: isApple ? 10 : 5,
    paddingBottom: isApple ? 10 : 5,
    width: isApple ? "95%" : "97.5%",
  },
  card: {
    backgroundColor: Color.background.shade10,
    marginVertical: 10,
  },
  cardPortrait: { width: "45%", marginHorizontal: "1%" },
  cardLandscape: { width: "25%", marginHorizontal: 10 },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  productTitle: {
    width: "60%",
  },
  productPrice: {
    textAlign: "right",
    width: "40%",
  },
});
