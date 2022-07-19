import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [login, onChangeLogin] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000096660/408c4e7d-a260-47d5-a435-51e319952837.webp",
        }}
      />
      <Text style={H1}>Hcode Lab Mobile Developer</Text>
      <View>
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite o login"
          value={login}
          onChangeText={onChangeLogin}
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite a senha"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />
      </View>
      <Image style={styles.language} source={require("./assets/php.png")} />
      <StatusBar style="auto" />
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
    width: 300,
    resizeMode: "contain",
    borderRadius: 10,
  },
  language: {
    height: 200,
    width: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
});

const H1 = StyleSheet.flatten([styles.bold, styles.title]);
