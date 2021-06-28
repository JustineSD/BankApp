import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Card from "../Card";
const Accounts = (props: any) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.headercontainer}>
        <Image style={styles.menu} source={require("../../assets/menu.png")} />
      </TouchableOpacity> */}
      <View style={styles.titles}>
        <Text style={styles.title}>Your Total Balance: </Text>
        <Text style={styles.subtitle}>$890,592.54</Text>
        <Text style={styles.transactions}>Your Accounts: </Text>
      </View>
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
      <Card
        content1={"Account Name"}
        content2={"Amount"}
        onPress={() => {
          console.warn("Transaction pressed");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgreen",
  },

  header: {
    color: "white",
    height: "90%",
    fontSize: 20,
    fontWeight: "bold",
  },
  balance: {
    color: "white",
    height: "80%",
    fontSize: 20,
    fontWeight: "bold",
  },
  titles: {
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 30,
    //color: "#5c5e62",
    color: "white",
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  headercontainer: {
    position: "absolute",
    top: 65,
    zIndex: 100,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  transactions: {
    top: 50,
    fontSize: 20,
    fontWeight: "500",
  },
});
export default Accounts;
