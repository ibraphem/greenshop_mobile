import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLORS, SIZES } from "../styles/Theme";
import HomeHeader from "./HomeHeader";
import { productData } from "../constants/db";
import Product from "./Product";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  const [produce, setProduce] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filter, setFilter] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchRes, setSearchRes] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const changeHandler = (val) => {
    setSearchWord(val);
    if (val !== "") {
      let keyword = val.toUpperCase();
      let filter = productData.filter((product) => {
        let productName = product.name.toUpperCase();
        return productName.indexOf(keyword) > -1;
      });
      setSearchRes(true);
      setFiltered(filter);
    } else {
      setSearchRes(false);
      setFiltered(null);
    }
  };

  const handleClose = () => {
    setSearchWord("");
    setSearchRes(false);
  };

  const onSelectCategory = (item, categ) => {
    let cat = item.filter((prod) => {
      return prod.category.indexOf(categ) > -1;
    });
    setSelectedCategory(categ);
    setProduce(cat);
  };

  // console.log(produce);

  const onSelectAll = (categ) => {
    setSelectedCategory("all");
    setProduce(productData);
  };

  const renderItem = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory === "all" ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectAll("all")}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <Ionicons
              name="flower-sharp"
              size={24}
              style={{
                width: 30,
                height: 30,
                color: COLORS.hot,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color: selectedCategory === "all" ? COLORS.white : COLORS.black,
            }}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory === "fruit" ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(productData, "fruit")}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <MaterialCommunityIcons
              name="fruit-cherries"
              size={24}
              style={{
                width: 30,
                height: 30,
                color: COLORS.hot,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color: selectedCategory === "fruit" ? COLORS.white : COLORS.black,
            }}
          >
            Fruits
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory === "flower" ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(productData, "flower")}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <Entypo
              name="flower"
              size={24}
              style={{
                width: 30,
                height: 30,
                color: COLORS.hot,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory === "flower" ? COLORS.white : COLORS.black,
            }}
          >
            Flowers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory === "vegetable"
                ? COLORS.primary
                : COLORS.secondary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(productData, "vegetable")}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
            }}
          >
            <MaterialIcons
              name="grass"
              size={24}
              style={{
                width: 30,
                height: 30,
                color: COLORS.hot,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory === "vegetable" ? COLORS.white : COLORS.black,
            }}
          >
            Vegs.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ paddingTop: 20 }}>
        <HomeHeader
          changeHandler={changeHandler}
          filtered={filtered}
          searchRes={searchRes}
          searchWord={searchWord}
          handleClose={handleClose}
        />

        <View pointerEvents={searchRes ? "none" : "auto"}>
          {renderItem()}
          <Product product={produce} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
