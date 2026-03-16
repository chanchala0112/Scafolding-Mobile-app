import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/splash.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>DILNETHU ENTERPRISES</Text>

        <Text style={styles.subtitle}>
          Scaffolding Safety Management System
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },

  logo: {
    width: 220,
    height: 220,
    marginBottom: 20,
    marginTop: -90
  },

  textContainer: {
    marginTop: 60   // moves both texts downward
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#000",
    textAlign: "center"
  },

  subtitle: {
    fontSize: 14,
    marginTop: 8,
    color: "#555",
    letterSpacing: 1,
    textAlign: "center"
  }
});