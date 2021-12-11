import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constants/Color";
import Orders from "../screens/Orders";
import MenuButton from "../components/MenuButton";

const OrdersStackNav = () => {
  const OrdersStack = createNativeStackNavigator();
  return (
    <OrdersStack.Navigator
      initialRouteName="Orders"
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
      <OrdersStack.Screen
        name="Orders"
        component={Orders}
        options={({ navigation }) => ({
          title: "Orders",
          headerLeft: (props) => <MenuButton navigation={navigation} />,
        })}
      />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackNav;
