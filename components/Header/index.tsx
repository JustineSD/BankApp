import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = (props: any) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Image style={styles.menu} source={require("../../assets/menu.png")} />
    </TouchableOpacity>
  );
};

export default Header;
