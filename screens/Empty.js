import React from "react";
import { globalStyles } from "../styles/GlobalStyles";
import Card from "./Card";
import { Text } from "react-native";

const Empty = ({ content }) => {
  return (
    <Card>
      <Text style={globalStyles.empty}>{content}</Text>
    </Card>
  );
};

export default Empty;
