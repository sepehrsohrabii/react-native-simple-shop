import React, { useState, useEffect } from "react";
import theme from "../config/theme";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartSingleProduct from "../components/cartSingleProductBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const CartScreen = ({ navigation }) => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(jsonValue);
      setData(values);
      //console.log(JSON.parse(values[0][1]));
      //console.log(values);
      let price2 = 0;
      values.map((item) => {
        //console.log(item);
        var product = JSON.parse(item[1]);
        //console.log("product");
        var productPrice = product.price.split("$");
        //console.log(productPrice[0]);
        price2 += Number(productPrice[0]);
      });
      setPrice(price2);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Title>Shopping Cart</Title>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          margin: 10,
        }}
      ></View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const inputNew = JSON.parse(item[1]);
          if (inputNew) {
            return <CartSingleProduct input={inputNew} removeInput={item[0]} />;
          }
        }}
        styles={styles.listView}
      />
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          margin: 5,
        }}
      ></View>
      <Title>Total Price: {price}$</Title>
      <PayButton
        onPress={() => {
          clearAll();
          navigation.navigate("Home");
        }}
      >
        <PayButtonText>Pay</PayButtonText>
      </PayButton>
    </View>
  );
};
const Title = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  font-family: ${theme.typography.heading1.fontFamily};
  color: ${theme.colors.darkGray};
  align-items: left;
  margin-left: 10px;
  margin-top: 10px;
`;
const Border = styled.View`
  border: 1px solid;
  height: 10px;
`;
const PayButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  border-radius: 10%;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
const PayButtonText = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  font-family: ${theme.typography.heading1.fontFamily};
  color: ${theme.colors.white};
`;
const styles = StyleSheet.create({
  listView: {
    overflow: "visible",
  },
});
export default CartScreen;
