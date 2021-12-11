import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/Color";
import { MenuIcon } from "../constants/Icons";

const MenuButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
      <MenuIcon style={styles.menuIcon} />
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  menuIcon: {
    color: Color.warning.dark,
  },
});
