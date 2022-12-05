import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Alert,
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import theme from "../config/theme";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const SingleProductBox = ({ title, img, desc, price }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const storeData = async ({ title, img, desc, price }) => {
    try {
      const jsonValue = JSON.stringify({ title, img, desc, price });
      var RandomNumber = Math.floor(Math.random() * 100000) + 1;
      await AsyncStorage.setItem(`product${RandomNumber}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };
  return (
    <Box>
      <Image
        width={20}
        height={20}
        style={{ width: "100%", height: 70 }}
        source={img}
      />
      <TitleText>{title}</TitleText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <AddButton>+</AddButton>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                width={20}
                height={20}
                style={{ height: "50%", width: "100%" }}
                source={img}
              />
              <TitleText>{title}</TitleText>
              <Text style={styles.descText}>{desc}</Text>
              <TitleText>Price: {price}</TitleText>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  storeData({ title, img, desc, price });
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </Box>
  );
};

const Box = styled.View`
  width: 80%;
  height: 150px;
  box-shadow: 3px 4px 7px;
  justify-content: space-between;
  background: ${theme.colors.white};
  border-radius: 5px;
  align-items: "left";
  shadow-color: "#000";
  shadow-opacity: 0.5;
  border: 1px solid ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;
const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.Text`
  font-size: ${theme.typography.heading2.fontSize};
  font-family: ${theme.typography.heading2.fontFamily};
  color: ${theme.colors.lightGray};
`;
const AddButton = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  font-family: ${theme.typography.heading1.fontFamily};
  color: ${theme.colors.three};
  align-self: center;
  align-items: center;
  padding: 5px;
`;
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.four,
    width: 40,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 100,
    top: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  descText: {
    fontFamily: theme.typography.paragraph1.fontFamily,
    fontSize: theme.typography.paragraph1.fontSize,
  },
});

export default SingleProductBox;
