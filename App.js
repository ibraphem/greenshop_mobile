import React from "react";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./screens/Tabs";
import OrderHistory from "./screens/OrderHistory";
import User from "./screens/User";
import ProductDetail from "./screens/ProductDetail";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/Reducer";
import CartProduct from "./screens/CartProduct";
import Help from "./screens/Help";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="CartProduct" component={CartProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
