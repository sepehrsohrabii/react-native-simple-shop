import { View, Text, Button } from "react-native";
import styled from "styled-components";
import theme from "../config/theme";
import { MaterialIcons } from "@expo/vector-icons";
const ContactScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Title>Contact Us</Title>
      <Paragraph>
        Excepteur mollit aute dolore enim consectetur non aute veniam cupidatat
        id sint anim nisi. Consequat duis elit officia cillum velit occaecat
        pariatur dolore velit aute aliqua exercitation cillum irure. Sint veniam
      </Paragraph>
      <View
        style={{
          flexDirection: "row",
          paddingStart: 10,
          paddingTop: 5,
          alignItems: "center",
        }}
      >
        <MaterialIcons name="email" size={18} color="black" />
        <H4>info@sample.com</H4>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingStart: 10,
          paddingTop: 5,
          alignItems: "center",
        }}
      >
        <MaterialIcons name="phone" size={18} color="black" />
        <H4>09111234567</H4>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingStart: 10,
          paddingTop: 5,
          alignItems: "center",
        }}
      >
        <MaterialIcons name="location-city" size={18} color="black" />
        <H4>Rasht, Guilan, Iran</H4>
      </View>
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
const H4 = styled.Text`
  font-size: ${theme.typography.heading4.fontSize};
  font-family: ${theme.typography.heading4.fontFamily};
  color: ${theme.colors.darkGray};
  align-items: left;
  margin-left: 10px;
`;
export default ContactScreen;
