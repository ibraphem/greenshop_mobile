import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../styles/Theme";
import Card from "./Card";

const SearchResult = ({ filt }) => {
  const navigation = useNavigation();

  const productSearch = () => {
    const renderTemplate = ({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", { item })}
      >
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
              /*     source={require("../constants/pic.jpeg")} */
              style={styles.img}
            />
            <View style={styles.searchOption}>
              <Text style={styles.optionLineOne}>{item.name}</Text>
              <Text style={styles.optionLineTwo}>&#8358;{item.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <View>
        {filt?.length > 0 ? (
          <FlatList
            data={filt}
            vertical
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderTemplate}
            contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
          />
        ) : null}
      </View>
    );
  };

  return <Card>{productSearch()}</Card>;
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
    marginRight: 10,
  },
  optionLineOne: {
    color: COLORS.hot,
    fontSize: 20,
    fontWeight: "900",
    paddingTop: 10,
    paddingBottom: 5,
  },
  optionLineTwo: {
    fontSize: 15,
  },
});

export default SearchResult;
