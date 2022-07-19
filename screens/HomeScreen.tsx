import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ImageRequireSource,
  StyleSheet,
  Text,
  View,
} from "react-native";

const db = [
  {
    id: "1",
    title: "JavaScript",
    logo: require("../assets/php.png"),
  },
  {
    id: "2",
    title: "PHP",
    logo: require("../assets/php.png"),
  },
];

export default function HomeScreen({ navigation }: any) {
  const [login, onChangeLogin] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <Image
        style={styles.logo}
        source={{
          uri: "https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000096660/408c4e7d-a260-47d5-a435-51e319952837.webp",
        }}
      />
      <Text style={H1}>Hcode Lab Mobile Developer</Text>
      <Button
        color="#f194ff"
        onPress={() => {
          navigation.navigate("Search");
        }}
        title="Busca"
      />
      <Button
        color="#f194ff"
        onPress={() => {
          navigation.navigate("Settings");
        }}
        title="Configurações"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 32,
  },
  title: {
    margin: 20,
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    borderRadius: 10,
    alignSelf: "center",
  },
  language: {
    height: 200,
    width: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "stretch",
  },
});

const H1 = StyleSheet.flatten([styles.bold, styles.title]);
