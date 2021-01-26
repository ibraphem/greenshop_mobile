import React from "react";
import { useStateValue } from "../context/StateProvider";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../styles/Theme";
import Card from "./Card";
import ScreenHeader from "./ScreenHeader";
import { getBasketTotal } from "../context/Reducer";
import call from "react-native-phone-call";
import Empty from "./Empty";

const CartProduct = () => {
  const [{ basket }, dispatch] = useStateValue();

  const callToOrder = (number) => {
    dispatch({
      type: "EMPTY_BASKET",
    });

    const args = {
      number: number,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  const order = () => {
    return (
      <View>
        <View style={{ position: "relative", padding: 10 }}>
          <Text style={styles.total}>
            Total: &#8358;{getBasketTotal(basket)}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.new,
              alignItems: "center",
              borderRadius: SIZES.radius,
            }}
            onPress={() => callToOrder("07031259185")}
          >
            <Text style={styles.call}>Call to order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const productInCart = () => {
    const renderItem = ({ item }) => (
      <Card cart="true">
        <View
          style={{
            flexDirection: "row",
            height: 60,
            marginBottom: 30,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              /*      source={require("../constants/pic.jpeg")} */
              style={styles.img}
            />
            <View style={styles.searchOption}>
              <Text style={styles.optionLineOne}>{item.name}</Text>
              <Text style={styles.optionLineTwo}>
                &#8358;{item.price} x {item.qty} = &#8358;
                {parseInt(item.price) * item.qty}
              </Text>
            </View>
            <TouchableOpacity
              onPressOut={() =>
                dispatch({
                  type: "REMOVE_FROM_BASKET",
                  id: item.id,
                })
              }
            >
              <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <MaterialIcons
                  name="delete"
                  size={24}
                  style={{
                    color: COLORS.hot,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );

    return (
      <View style={{ padding: 20 }}>
        {basket?.length > 0 ? (
          <View>
            <FlatList
              data={basket}
              vertical
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingVertical: SIZES.padding * 2,
                paddingBottom: 350,
              }}
            />
          </View>
        ) : (
          <Empty content="Cart is empty" />
        )}
      </View>
    );
  };

  // console.log(basket);
  return (
    <View style={{ paddingTop: 20 }}>
      <ScreenHeader name="Cart" />
      {order()}
      {productInCart()}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  searchOption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 60,
  },
  optionLineOne: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "900",
    paddingTop: 10,
    paddingBottom: 5,
  },
  optionLineTwo: {
    fontSize: 15,
  },

  deleteIcon: {
    top: 25,
    left: 40,
    padding: 5,
  },
  total: {
    fontSize: 30,
    fontWeight: "900",
    padding: 10,
    textAlign: "center",
  },
  call: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "400",
  },
});

export default CartProduct;
