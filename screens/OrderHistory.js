import React from "react";
import { View } from "react-native";
import Empty from "./Empty";
import ScreenHeader from "./ScreenHeader";

const OrderHistory = () => {
  return (
    <View>
      <View style={{ paddingTop: 20 }}>
        <ScreenHeader name="Order History" />
      </View>
      <View style={{ padding: 20 }}>
        <Empty content="You have no order History" />
      </View>
    </View>
  );
};

export default OrderHistory;
