import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [login, onChangeLogin] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hcode Lab Mobile Developer</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});
