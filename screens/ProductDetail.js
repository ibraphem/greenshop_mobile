import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { useStateValue } from "../context/StateProvider";
import { COLORS, SIZES } from "../styles/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import Cart from "./Cart";
import ScreenHeader from "./ScreenHeader";

const ProductDetail = ({ route, navigation }) => {
  const [prod, setProd] = useState(route.params);
  const [orderItems, setOrderItems] = useState([]);
  const [orderQty, setOrderQty] = useState(1);
  const [addToCart, setAddToCart] = useState(true);

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const checkBasket = basket.findIndex(
      (basketItem) => basketItem.id === prod.item.id
    );

    if (checkBasket >= 0) {
      setAddToCart(false);
    }
  }, []);

  const increaseOrderQty = () => {
    setOrderQty((prevQty) => prevQty + 1);
  };

  const decreaseOrderQty = () => {
    if (orderQty > 2) {
      setOrderQty((prevQty) => prevQty - 1);
    } else {
      setOrderQty(1);
    }
  };

  //console.log(prod.item);

  const addToBasket = () => {
    let item = prod.item;
    let quantity = { qty: orderQty };
    item = { ...item, ...quantity };

    dispatch({
      type: "ADD_TO_BASKET",
      item: item,
    });

    setAddToCart(false);
  };

  const renderHeader = () => {
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
            <Text style={styles.name}>{prod.item.name}</Text>
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

  const renderProductInfo = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ height: SIZES.height * 0.35 }}>
            <Image
              source={{
                uri: prod.item.image,
              }}
              /*   source={require("../constants/pic.jpeg")}*/
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: "100%",
              }}
            />

            {/* Quantity */}
            <View
              style={{
                position: "absolute",
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() => decreaseOrderQty()}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{orderQty}</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() => increaseOrderQty()}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name & Description */}
          <View
            style={{
              width: SIZES.width,
              alignItems: "center",
              marginTop: 15,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                marginVertical: 10,
                textAlign: "center",
                color: COLORS.hot,
                fontWeight: "800",
              }}
            >
              {prod.item.name} - &#8358;{parseInt(prod.item.price).toFixed(2)}
            </Text>
            <Text>{prod.item.feed}</Text>
          </View>

          {/* Calories */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          ></View>
        </View>
      </Animated.ScrollView>
    );
  };

  const renderOrder = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
            }}
          >
            <Text>{orderQty} item(s)</Text>
            <Text>&#8358;{orderQty * parseInt(prod.item.price)}</Text>
          </View>

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {addToCart ? (
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.9,
                  padding: SIZES.padding,
                  backgroundColor: COLORS.primary,
                  alignItems: "center",
                  borderRadius: SIZES.radius,
                }}
                onPress={addToBasket}
              >
                <Text style={{ color: COLORS.white }}>Add To Cart</Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  width: SIZES.width * 0.9,
                  padding: SIZES.padding,
                  backgroundColor: "#dbf0dc",
                  alignItems: "center",
                  borderRadius: SIZES.radius,
                }}
              >
                <Text style={{ color: COLORS.white }}>
                  Already Added To Cart
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        <ScreenHeader name={prod.item.name} />
      </View>
      {renderProductInfo()}
      {renderOrder()}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default ProductDetail;
