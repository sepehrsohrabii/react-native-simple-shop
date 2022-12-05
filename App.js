import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Layout from "./src/layout/layout";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
export default function App() {
  return (
    <View style={styles.container}>
      <MyStatusBar style="light" backgroundColor="#850E35" animated={true} />
      <Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E4",
    justifyContent: "center",
  },
  navTab: {
    color: "#FFF5E4",
    fontSize: 42,
  },
});
