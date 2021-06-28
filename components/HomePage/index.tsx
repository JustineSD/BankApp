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
import StyledButton from "../StyledButton";
const HomePage = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/banklogo.jpeg")}
      />
      <StyledButton content={"CHATBOT"} />
      <StyledButton content={"LOGIN"} />
    </View>
  );
};
export default HomePage;
