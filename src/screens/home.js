import {
  Dimensions,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import theme from "../config/theme";
import Carousel from "react-native-reanimated-carousel";
import SingleProductBox from "../components/singleProductBox";
import styled from "styled-components";

const products = [
  {
    img: require("../../assets/product1.jpeg"),
    title: "Sib",
    price: "10$",
    desc: "Esse culpa veniam deserunt et elit proident id dolor consequat quis labore deserunt consequat. Dolor aliqua in minim ex sit anim enim eiusmod amet. Consectetur officia pariatur laborum in. Veniam minim exercitation exercitation dolor nisi laboris. Ut non laborum anim fugiat. Voluptate mollit labore adipisicing dolore sunt in pariatur dolor reprehenderit Lorem qui aliquip proident. Ut anim veniam incididunt esse officia irure mollit proident nisi in consequat aliqua excepteur non.",
  },
  {
    img: require("../../assets/product2.jpg"),
    title: "Sib2",
    price: "20$",
    desc: "Esse culpa veniam deserunt et elit proident id dolor consequat quis labore deserunt consequat. Dolor aliqua in minim ex sit anim enim eiusmod amet. Consectetur officia pariatur laborum in. Veniam minim exercitation exercitation dolor nisi laboris. Ut non laborum anim fugiat. Voluptate mollit labore adipisicing dolore sunt in pariatur dolor reprehenderit Lorem qui aliquip proident. Ut anim veniam incididunt esse officia irure mollit proident nisi in consequat aliqua excepteur non.",
  },
];
const HomeScreen = ({ navigation }) => {
  const animation = useRef(null);
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <SliderView>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../assets/shop.json")}
        />
        <TitleBox>
          <Title>Sample Shop</Title>
          <SubTitle>Shop here and trust us!</SubTitle>
          <CustomText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur
          </CustomText>
        </TitleBox>
      </SliderView>
      <Title>Our Products</Title>
      <Carousel
        loop
        autoPlay={true}
        data={products}
        scrollAnimationDuration={2000}
        vertical={false}
        width={width / 3}
        height={width / 2}
        style={{ width: width, marginTop: 10 }}
        onSnapToItem={() => {}}
        renderItem={({ item }) => (
          <SingleProductBox
            title={item.title}
            img={item.img}
            desc={item.desc}
            price={item.price}
          />
        )}
      />
    </View>
  );
};
const SliderView = styled.View`
  flex-direction: row;
  height: 200px;
`;
const TitleBox = styled.View`
  background-color: ${theme.colors.white};
  padding: 10px;
  height: 150px;
  width: 150px;
  top: 30px;
  z-index: -1;
`;
const Title = styled.Text`
  font-size: ${theme.typography.heading2.fontSize};
  font-family: ${theme.typography.heading2.fontFamily};
  color: ${theme.colors.darkGray};
`;
const SubTitle = styled.Text`
  font-size: ${theme.typography.heading6.fontSize};
  font-family: ${theme.typography.heading6.fontFamily};
  color: ${theme.colors.darkGray};
  margin-bottom: 10px;
`;
const CustomText = styled.Text`
  font-size: ${theme.typography.paragraph1.fontSize};
  font-family: ${theme.typography.paragraph1.fontFamily};
  color: ${theme.colors.darkGray};
`;
const styles = StyleSheet.create({
  sliderPic: {
    width: 100,
  },
});
export default HomeScreen;
