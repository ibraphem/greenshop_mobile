import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#fff",
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 0,
      marginVertical: props.cart === "true" ? 5 : 70,
    },
    cardContent: {
      marginVertical: 10,
      marginHorizontal: 16,
    },
  });

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;
