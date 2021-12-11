import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Color from "../constants/Color";
import HomeStackNav from "./HomeStackNav";
import OrdersStackNav from "./OrdersStackNav";
import ManageProductsStackNav from "./ManageProductsStackNav";
import { Store, Products, Cart } from "../constants/Icons";
import { PortraitContext } from "../context/OrientationContext";

const isApple = Platform.OS === "ios";

const DrawerNav = () => {
  const { isPortrait } = useContext(PortraitContext);
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={"HomeDrawer"}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Color.summer.shade12,
          width: isPortrait ? "75%" : "50%",
        },
        drawerLabelStyle: {
          color: Color.primary.dark,
          fontSize: isApple ? 20 : 15,
          textAlign: "left",
        },
        drawerContentStyle: {
          position: "absolute",
          top: isPortrait ? 50 : 10,
          width: "100%",
        },
        drawerInactiveBackgroundColor: "rgba(128, 0, 247, 0.10)",
        drawerActiveBackgroundColor: "rgba(128, 0, 247, 0.35)",
        drawerType: "front",
        headerShown: false,
        headerStyle: { backgroundColor: Color.primary.light },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
      }}
      defaultStatus={"closed"}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeStackNav}
        options={{
          title: "Home",
          drawerIcon: () => (
            <Store color={Color.warning.dark} size={isApple ? 20 : 15} />
          ),
        }}
      />
      <Drawer.Screen
        name="OrdersDrawer"
        component={OrdersStackNav}
        options={{
          title: "Orders",
          drawerIcon: () => (
            <Cart color={Color.warning.dark} size={isApple ? 20 : 15} />
          ),
        }}
      />
      <Drawer.Screen
        name="ManageProductsDrawer"
        component={ManageProductsStackNav}
        options={{
          title: "Manage Products",
          drawerIcon: () => (
            <Products color={Color.warning.dark} size={isApple ? 20 : 15} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
