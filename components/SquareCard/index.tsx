import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";
const Card = (props: any) => {
  const { content1, content2, onPress } = props;

  return (
    <TouchableOpacity style={[styles.cardcontainer]} onPress={() => onPress()}>
      <Text style={styles.title}>{content1}</Text>
      <Text style={styles.subtitle}>{content2}</Text>
    </TouchableOpacity>
  );
};

export default Card;
