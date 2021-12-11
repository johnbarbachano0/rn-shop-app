import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ProductsStore } from "../context/ProductsContext";
import ProductList from "../components/ProductList";
import { useEffect } from "react/cjs/react.development";

const Home = ({ navigation }) => {
  const { products } = useContext(ProductsStore);
  const { allProducts } = products;

  useEffect(() => {
    console.log("home");
    console.log(products);
  }, [products.cartProducts]);

  return (
    <View style={styles.screen}>
      <ProductList products={allProducts} navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
