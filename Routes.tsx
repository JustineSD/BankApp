import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Balance from "./components/Balance";
import Header from "./components/Header";
import ChatBot from "./components/ChatBot";
import Card from "./components/Card";
import SquareCard from "./components/SquareCard";
import Menu from "./components/Menu";
import Accounts from "./components/Accounts";
interface RoutesProps {}

const Stack = createStackNavigator();

function Login() {
  return <LoginPage />;
}

function ChatBotScreen() {
  return <ChatBot />;
}

function AccountsScreen() {
  return <Accounts />;
}

function BalanceScreen() {
  return <Balance />;
}

function MenuScreen() {
  return <Menu />;
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="ChatBot" component={ChatBotScreen} />
        <Stack.Screen name="Accounts" component={AccountsScreen} />
        <Stack.Screen name="Balance" component={BalanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
