import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../styles/Theme";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
} from "react-native";
import { productData } from "../constants/db";
import SearchResult from "./SearchResult";
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";

const HomeHeader = ({
  changeHandler,
  filtered,
  searchRes,
  searchWord,
  handleClose,
}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    input: {
      borderWidth: 0,
      width: searchRes ? "80%" : "100%",
      padding: 15,
      backgroundColor: COLORS.white,
      fontSize: 18,
      borderRadius: 6,
    },

    SectionStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 0.5,
      borderColor: "#000",
      height: 50,
      borderRadius: 5,
      margin: 10,
    },

    IconStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 40,
      alignItems: "center",
    },
  });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          marginBottom: 30,
          marginTop: 10,
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.input}
              placeholder="search..."
              underlineColorAndroid="transparent"
              onChangeText={changeHandler}
              value={searchWord}
            />
            {searchRes ? (
              <TouchableOpacity onPress={handleClose}>
                <MaterialIcons
                  name="close"
                  size={25}
                  color={COLORS.black}
                  style={styles.IconStyle}
                />
              </TouchableOpacity>
            ) : null}
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
      <View style={{ position: "absolute", width: 300, height: "auto" }}>
        {searchRes ? <SearchResult filt={filtered} /> : null}
      </View>
    </View>
  );
};

export default HomeHeader;
