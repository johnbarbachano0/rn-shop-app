import React, { useContext } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import Color from "../constants/Color";
import { ProductsStore } from "../context/ProductsContext";
import { isApple } from "../constants/isApple";
import { TrashIcon } from "../constants/Icons";
import { genRandomNumber } from "../components/miscJavascript";
import { ACTIONS } from "../context/Actions";

const Cart = () => {
  const { products, dispatchProduct } = useContext(ProductsStore);
  const { allProducts, cartProducts } = products;
  var orderTotal = [];
  const reducerOrderTotal = (prev, curr) => prev + curr;
  const isCartEmpty = cartProducts.length === 0;

  console.log(cartProducts);

  const getOrderDetails = () => {
    const order = {
      orderNo: genRandomNumber(99999999),
      items: cartProducts,
      orderDate: Date.now(),
    };
    return order;
  };

  const createAlert = () => {
    return Alert.alert(
      "Check Out!",
      "Are you sure you want to check out your order?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () =>
            dispatchProduct({
              type: ACTIONS.ADD_ORDER,
              payload: { orders: getOrderDetails() },
            }),
        },
      ]
    );
  };

  const getOrderTotal = (orderTotal) => {
    const value =
      orderTotal.length === 0
        ? "0.00"
        : orderTotal.reduce(reducerOrderTotal).toLocaleString();
    return value;
  };

  const cartItemHandler = (cartProduct) => {
    const productDetails = allProducts.filter(
      (product) => product.id === cartProduct.id
    )[0];
    const totalPrice = productDetails.price * cartProduct.qty;
    orderTotal.push(totalPrice);
    return (
      <Card key={cartProduct.id} style={styles.cartItem}>
        <Text style={{ ...styles.quantity, ...styles.cartText }}>
          {cartProduct.qty}
        </Text>
        <Text
          style={{ ...styles.productName, ...styles.cartText }}
          numberOfLines={1}
        >
          {productDetails.productName}
        </Text>
        <Text style={{ ...styles.price, ...styles.cartText }} numberOfLines={1}>
          ${totalPrice.toLocaleString()}
        </Text>
        <TrashIcon
          style={styles.trashIcon}
          size={20}
          color={Color.error.light}
          onPress={() =>
            dispatchProduct({
              type: ACTIONS.REMOVE_FROM_CART,
              payload: { id: cartProduct.id },
            })
          }
        />
      </Card>
    );
  };

  return (
    <View style={styles.screen}>
      <Card style={{ ...styles.cartListCont, ...styles.cartHeader }}>
        <Text style={{ ...styles.quantity, ...styles.cartText }}>Qty</Text>
        <Text
          style={{
            ...styles.productName,
            ...styles.cartText,
            textAlign: "center",
          }}
        >
          Item
        </Text>
        <Text style={{ ...styles.price, ...styles.cartText }}>Price</Text>
      </Card>
      <ScrollView contentContainerStyle={styles.cartListCont}>
        {cartProducts.map((cartProduct) => cartItemHandler(cartProduct))}
      </ScrollView>
      <View style={styles.orderCont}>
        <View style={styles.totalCont}>
          <BodyText style={styles.totalLabel}>Total: </BodyText>
          <BodyText style={styles.totalPrice}>
            ${getOrderTotal(orderTotal)}
          </BodyText>
        </View>
        <View style={styles.buttonCont}>
          <MainButton
            style={styles.orderBtn}
            bgUnpress={isCartEmpty ? "gray" : Color.secondary.dark}
            bgPress={Color.highlight.dark}
            disabled={isCartEmpty ? true : false}
            onPress={() => createAlert()}
          >
            <Text style={styles.orderBtnText}>Order Now</Text>
          </MainButton>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  cartListCont: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: isApple ? 10 : 5,
    paddingBottom: isApple ? 10 : 5,
    width: isApple ? "95%" : "97.5%",
  },
  cartHeader: {
    backgroundColor: "#eee",
    paddingBottom: 0,
  },
  cartItem: {
    backgroundColor: Color.retro.shade5,
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    width: "100%",
  },
  cartText: { fontSize: 20, fontFamily: "roboto-bold" },
  quantity: {
    textAlign: "center",
    width: "10%",
  },
  productName: {
    width: "50%",
  },
  price: {
    textAlign: "center",
    width: "30%",
  },
  orderCont: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Color.secondary.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  totalCont: {
    flexDirection: "row",
    width: "60%",
  },
  totalLabel: {
    fontFamily: "roboto-bold",
    fontSize: 25,
  },
  totalPrice: {
    fontFamily: "roboto",
    fontSize: 25,
  },
  buttonCont: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  orderBtn: {
    padding: 20,
    paddingHorizontal: 0,
    width: "100%",
  },
  orderBtnText: {
    color: "white",
    fontFamily: "roboto-bold",
    fontSize: 20,
    textAlign: "center",
  },
  trashIcon: {
    width: "10%",
  },
});
