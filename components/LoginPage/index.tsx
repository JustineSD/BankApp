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
const LoginPage = (props: any) => {
  var email;
  var password;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/banklogo.jpeg")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="black"
          onChangeText={(text) => (email = text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="black"
          onChangeText={(text) => (password = text)}
        />
      </View>
      <StyledButton content={"LOGIN"} />
    </View>
  );
  console.log(email);
  console.log(password);
};
export default LoginPage;
