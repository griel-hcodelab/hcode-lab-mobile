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

export default function SettingsScreen() {
  const [login, onChangeLogin] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  return (
    <View>
      <Text>Configurações</Text>
    </View>
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
