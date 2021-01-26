import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/Theme";
import Card from "./Card";
import ScreenHeader from "./ScreenHeader";

const Help = () => {
  return (
    <View>
      <View style={{ paddingTop: 20 }}>
        <ScreenHeader name="About Us" />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Card>
          <Text style={styles.title}>How can we help?</Text>
          <Text style={styles.body}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident. Ut enim ad minima veniam quis nostrum exercitationem
            ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur
          </Text>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.title}>Thank You</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.black,
    padding: 10,
  },
  body: {
    fontSize: 15,
    textAlign: "justify",
  },
});

export default Help;
