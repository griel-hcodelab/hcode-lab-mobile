import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [login, onChangeLogin] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  return (
    <View style={styles.container}>
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
});

const H1 = StyleSheet.flatten([styles.bold, styles.title]);
