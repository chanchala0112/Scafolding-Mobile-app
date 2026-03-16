import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [role, setRole] = useState("");

  const login = () => {
    if (role === "worker") {
      navigation.navigate("Worker");
    } else if (role === "supervisor") {
      navigation.navigate("Supervisor");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scaffold Safety App</Text>

      <TextInput
        placeholder="Enter role (worker/supervisor)"
        style={styles.input}
        onChangeText={setRole}
      />

      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 }
});