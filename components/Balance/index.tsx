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
import Card from "../Card";
const Balance = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headercontainer}>
        <Image style={styles.menu} source={require("../../assets/menu.png")} />
      </TouchableOpacity>
      <View style={styles.titles}>
        <Text style={styles.title}>Your Balance: </Text>
        <Text style={styles.subtitle}>$890,592.54</Text>
        <Text style={styles.transactions}>Your Transactions: </Text>
      </View>
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Place"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
    </View>
  );
};
export default Balance;
