import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
const StyledButton = (props: any) => {
  const content = props.content;
  const navigation = props.navigation;

  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => navigation.navigate("MenuScreen")}
    >
      <Text style={styles.loginText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
