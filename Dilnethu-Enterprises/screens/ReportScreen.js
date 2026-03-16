import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function ReportScreen() {
  const [issue, setIssue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Describe scaffold issue"
        value={issue}
        onChangeText={setIssue}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <Button title="Submit Report" />
    </View>
  );
}