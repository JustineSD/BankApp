import { StyleSheet, Dimensions } from "react-native";
const devicewidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardcontainer: {
    width: devicewidth / 2.4,
    backgroundColor: "white",
    top: -30,
    left: 15,
    padding: "5%",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,

    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
  },
});
export default styles;
