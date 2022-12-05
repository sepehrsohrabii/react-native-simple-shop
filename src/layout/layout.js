import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  Link,
} from "@react-navigation/native";
import styled from "styled-components";
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import ContactScreen from "../screens/contact";
import CartScreen from "../screens/cart";
import { Ionicons } from "@expo/vector-icons";
import theme from "../config/theme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import LottieView from "lottie-react-native";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "transparent",
  },
};

const Layout = () => {
  const animation = useRef(null);
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  const Drawer = createDrawerNavigator();
  return (
    <MainContainer>
      <NavigationContainer theme={MyTheme}>
        <HeaderContainer>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 30,
              transform: [{ rotate: "-45deg" }],
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../assets/arrow.json")}
          />
          <LogoText>Sample</LogoText>
          <Link to={{ screen: "Shopping Cart" }}>
            <Ionicons
              name="cart-outline"
              size={24}
              color={theme.colors.white}
            />
          </Link>
        </HeaderContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About Us" component={AboutScreen} />
          <Drawer.Screen name="Contact Us" component={ContactScreen} />
          <Drawer.Screen name="Shopping Cart" component={CartScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};
const MainContainer = styled.View`
  flex: 1;
  font-family: Roboto_700Bold;
  font-size: 42px;
`;
const HeaderContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.secondary};
  align-items: center;
  padding-horizontal: 20px;
`;
const LogoText = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  color: ${theme.colors.white};
  align-items: center;
  font-family: ${theme.typography.heading1.fontFamily};
`;
export default Layout;
