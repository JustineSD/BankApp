import { StyleSheet, Dimensions } from "react-native";
const devicewidth = Math.round(Dimensions.get("window").width);
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
    marginTop: "30%",
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
export default styles;
