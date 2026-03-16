import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WorkerDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker Dashboard</Text>

      <Button
        title="Scaffold Inspection"
        onPress={() => navigation.navigate("Inspection")}
      />

      <Button
        title="Report Issue"
        onPress={() => navigation.navigate("Report")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 }
});