import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constants/Color";
import ManageProducts from "../screens/ManageProducts";
import EditProducts from "../screens/EditProducts";
import MenuButton from "../components/MenuButton";

const ManageProductsStackNav = () => {
  const ManageProductsStack = createNativeStackNavigator();
  return (
    <ManageProductsStack.Navigator
      initialRouteName="ManageProducts"
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
      <ManageProductsStack.Screen
        name="ManageProducts"
        component={ManageProducts}
        options={({ navigation }) => ({
          title: "Manage Products",
          headerLeft: (props) => <MenuButton navigation={navigation} />,
        })}
      />
      <ManageProductsStack.Screen
        name="EditProducts"
        component={EditProducts}
        options={{
          title: "Edit Products",
        }}
      />
    </ManageProductsStack.Navigator>
  );
};

export default ManageProductsStackNav;
