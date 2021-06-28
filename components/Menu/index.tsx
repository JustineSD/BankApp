import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import SquareCard from "../SquareCard";
import { useNavigation } from "@react-navigation/native";

const Menu = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <View
        style={{
          height: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Menu
        </Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "green" }}>
        <SquareCard
          content1={"Accounts"}
          onPress={() => {
            console.warn("Accounts pressed");
            navigation.navigate("Accounts");
          }}
        />
        <SquareCard
          content1={"Chatbot"}
          onPress={() => {
            console.warn("Chatbot pressed");
            navigation.navigate("ChatBot");
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <SquareCard
          content1={"Call IT"}
          onPress={() => {
            console.warn("IT pressed");
          }}
        />
        <SquareCard
          content1={"WebWest"}
          onPress={() => {
            console.warn("WebWest pressed");
            Linking.openURL("webwest.bankofthewest.com/home/Pages/defaultaspx");
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <SquareCard
          content1={"ADP"}
          onPress={() => {
            console.warn("ADP pressed");
          }}
        />
      </View>
    </View>
  );
};
export default Menu;
