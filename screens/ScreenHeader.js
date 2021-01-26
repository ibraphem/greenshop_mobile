import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../styles/Theme";
import Cart from "./Cart";

const ScreenHeader = ({ name }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", backgroundColor: COLORS.primary }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color={COLORS.white}
        />
      </TouchableOpacity>

      {/* Restaurant Name Section */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Cart />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "600",
  },
});

export default ScreenHeader;
