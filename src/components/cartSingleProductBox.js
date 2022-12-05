import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../config/theme";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartSingleProduct = ({ input, removeInput }) => {
  const item = input;
  const removeItem = async (rmIn) => {
    try {
      //console.log(rmIn);
      await AsyncStorage.removeItem(rmIn);
    } catch (e) {
      // remove error
    }

    //console.log("Done.");
  };
  return (
    <Box>
      <RemoveButton onPress={() => removeItem(removeInput)}>
        <Ionicons
          name="remove-circle-outline"
          size={24}
          color={theme.colors.secondary}
        />
      </RemoveButton>
      <ProductTitle>{item.title}</ProductTitle>
      <Price>{item.price}</Price>
    </Box>
  );
};
const Box = styled.View`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const ProductTitle = styled.Text`
  font-size: ${theme.typography.heading2.fontSize};
  font-family: ${theme.typography.heading2.fontFamily};
  color: ${theme.colors.darkGray};
  align-items: left;
  flex: 1;
  margin-left: 10px;
`;
const Price = styled.Text`
  font-size: ${theme.typography.heading2.fontSize};
  font-family: ${theme.typography.heading2.fontFamily};
  color: ${theme.colors.darkGray};
  align-items: left;
`;
const RemoveButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  vertical-align: middle;
`;
export default CartSingleProduct;
