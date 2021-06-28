import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import Header from "../Header";
const chatbot = require("../../chatbot.html");
const ChatBot = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Header
        onPress={() => {
          console.warn("Back pressed");
        }}
      /> */}
      {/* <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          backgroundColor: "green",
          height: 25,
        }}
      >
        <Text style={{ color: "green", position: "absolute" }}>dssdci</Text>
      </View> */}
      <WebView
        style={{ flex: 1 }}
        startInLoadingState
        originWhitelist={["*"]}
        source={chatbot}
      />
    </SafeAreaView>
  );
};

export default ChatBot;
