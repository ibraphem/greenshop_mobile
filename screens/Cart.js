import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../styles/Theme";
import { useStateValue } from "../context/StateProvider";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPressOut={() => navigation.navigate("CartProduct")}>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name="shopping-cart"
          size={24}
          style={{
            width: 30,
            height: 30,
            paddingTop: 5,
            color: COLORS.white,
          }}
        />
        {basket?.length > 0 ? (
          <View style={styles.cartCount}>
            <Text style={styles.count}>{basket?.length}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartCount: {
    backgroundColor: COLORS.hot,
    borderRadius: 9,
    width: 18,
    height: 18,
    top: -5,
    left: -10,
  },
  count: {
    color: COLORS.white,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: 12,
  },
});

export default Cart;
