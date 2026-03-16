import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // <-- for eye icon

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // <-- toggle state

  const handleLogin = () => {
    if(password.length < 8){
      Alert.alert("Error","Password must be at least 8 characters");
      return;
    }

    // ADMIN LOGIN
    if(username === "admin@gmail.com" && password === "Admin@123"){
      navigation.navigate("AdminHome");
      return;
    }

    // USER LOGIN
    if(username !== "" && password !== ""){
      navigation.navigate("UserHome");
      return;
    }

    Alert.alert("Error","Please enter valid details");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        <Image
          source={require("../assets/splash.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Welcome to Dilnethu Enterprises</Text>

        <TextInput
          placeholder="Username or Email"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        {/* Password input with toggle */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry={!showPassword} // <-- show/hide password
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
            <Ionicons 
              name={showPassword ? "eye" : "eye-off"} 
              size={24} 
              color={showPassword ? "#8d8c8a" : "#8d8c8a"} // Orange if visible
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },

  logo:{
    width:150,
    height:150,
    marginBottom:270,
    marginTop:-150
  },

  title:{
    fontSize:20,
    marginBottom:50,
    marginTop:-280,
    fontWeight:"bold",
  },

  input:{
    width:"100%",
    backgroundColor:"#f1f1f1",
    padding:15,
    borderRadius:10,
    marginBottom:0,
    marginTop:10
  },

  passwordContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#f1f1f1",
    borderRadius:10,
    paddingHorizontal:10,
    marginTop:10
  },

  passwordInput:{
    flex:1,
    paddingVertical:15,
    paddingHorizontal:0
  },

  eyeButton:{
    padding:5
  },

  button:{
    backgroundColor:"#f7931e",
    padding:15,
    width:"100%",
    borderRadius:30,
    alignItems:"center",
    marginTop:20
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  },

  link:{
    marginTop:15,
    color:"#555"
  }
});