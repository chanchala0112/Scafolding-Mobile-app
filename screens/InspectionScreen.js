import React, { useState } from "react";
import { View, Text, Switch, Button } from "react-native";

export default function InspectionScreen() {
  const [safe, setSafe] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Guardrails Installed</Text>
      <Switch value={safe} onValueChange={setSafe} />

      <Text>Platforms Secure</Text>
      <Switch value={safe} onValueChange={setSafe} />

      <Button title="Submit Inspection" />
    </View>
  );
}