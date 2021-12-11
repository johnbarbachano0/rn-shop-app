import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Navigation;
