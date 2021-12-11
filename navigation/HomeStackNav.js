import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constants/Color";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import MenuButton from "../components/MenuButton";
import CartButton from "../components/CartButton";

const HomeStackNav = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.primary.light,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
        headerBackTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={({ route }) => ({
          title: "Your Cart",
        })}
      />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ route, navigation }) => ({
          title: route.params.productName,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
