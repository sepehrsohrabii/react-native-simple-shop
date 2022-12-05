import { View, Text, Button } from "react-native";
import styled from "styled-components";
import theme from "../config/theme";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

const AboutScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/about.json")}
      />
      <Title>About Us</Title>
      <Paragraph>
        Excepteur mollit aute dolore enim consectetur non aute veniam cupidatat
        id sint anim nisi. Consequat duis elit officia cillum velit occaecat
        pariatur dolore velit aute aliqua exercitation cillum irure. Sint veniam
        qui esse magna nisi minim pariatur tempor. Sint ullamco exercitation
        nostrud Lorem eiusmod aute id anim tempor adipisicing ipsum laboris
        exercitation pariatur.
      </Paragraph>
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
const Paragraph = styled.Text`
  font-size: ${theme.typography.paragraph2.fontSize};
  font-family: ${theme.typography.paragraph2.fontFamily};
  color: ${theme.colors.darkGray};
  align-items: left;
  margin: 10px;
`;
export default AboutScreen;
