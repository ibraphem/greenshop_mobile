import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../styles/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Product = ({ product }) => {
  const navigation = useNavigation();
  const renderRestaurantList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() => navigation.navigate("ProductDetail", { item })}
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={{
              uri: item.image,
            }}
            /*      source={require("../constants/pic.jpeg")} */
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}

          <MaterialIcons
            name={item.tag === "Hot" ? "whatshot" : "push-pin"}
            size={24}
            color={item.tag === "Hot" ? COLORS.hot : COLORS.new}
            style={{
              height: 20,
              width: 20,

              marginRight: 10,
            }}
          />
          <Text>{item.tag}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            <Text style={styles.name}> &#8358;{item.price} </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={styles.cat}>{item.category}</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={product}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 150,
        }}
      />
    );
  };

  return <View>{renderRestaurantList()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
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
  name: {
    fontWeight: "700",
  },
  cat: {
    textAlign: "center",
    width: 80,
    height: 30,
    fontStyle: "italic",
    color: COLORS.lightGray4,
  },
});

export default Product;
