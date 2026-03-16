import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from "react-native";

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <View style={styles.container}>

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

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Forgot Password?</Text>

      <Text style={styles.link}>Create Account</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },

  logo:{
    width:150,
    height:150,
    marginBottom:180
  },

  title:{
    fontSize:20,
    marginTop:-190,
    marginBottom:80,
    fontWeight:"bold",
  
  },

  input:{
    width:"100%",
    backgroundColor:"#f1f1f1",
    padding:15,
    borderRadius:10,
    marginBottom:15
  },

  button:{
    backgroundColor:"#f7931e",
    padding:15,
    width:"100%",
    borderRadius:30,
    alignItems:"center",
    marginTop:10
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