import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SupervisorDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supervisor Dashboard</Text>
      <Text>View inspection reports</Text>
      <Text>Approve scaffold safety</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24 }
});