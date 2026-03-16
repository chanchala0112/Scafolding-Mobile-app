import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if(!name || !email || !phone || !address || !district || !password || !confirmPassword){
      Alert.alert("Error","Please fill all fields");
      return;
    }

    if(password.length !== 8){
      Alert.alert("Error","Password must be exactly 8 characters");
      return;
    }

    if(password !== confirmPassword){
      Alert.alert("Error","Passwords do not match");
      return;
    }

    const phoneRegex = /^0\d{9}$/;
    if(!phoneRegex.test(phone)){
      Alert.alert("Error","Phone number must start with 0 and be exactly 10 digits");
      return;
    }

    Alert.alert("Success","Account Created Successfully");
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        <Text style={styles.title}>Create Account</Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phone}
          keyboardType="phone-pad"
          onChangeText={setPhone}
          maxLength={10}
        />

        <TextInput
          placeholder="Address"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <TextInput
          placeholder="District"
          style={styles.input}
          value={district}
          onChangeText={setDistrict}
        />

        {/* Password field */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            maxLength={8}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
            <Ionicons 
              name={showPassword ? "eye" : "eye-off"} 
              size={24} 
              color={showPassword ? "#8d8c8a" : "#8d8c8a"} // Orange if visible
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password field */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.passwordInput}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            maxLength={8}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeButton}>
            <Ionicons 
              name={showConfirmPassword ? "eye" : "eye-off"} 
              size={24} 
              color={showConfirmPassword ? "#8d8c8a" : "#8d8c8a"} 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20,
    backgroundColor:"#fff"
  },

  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:20
  },

  input:{
    width:"100%",
    backgroundColor:"#f1f1f1",
    padding:15,
    borderRadius:10,
    marginBottom:15
  },

  passwordContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#f1f1f1",
    borderRadius:10,
    paddingHorizontal:10,
    marginBottom:15
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
    marginTop:10
  },

  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16
  },

  link:{
    marginTop:15,
    color:"#555"
  }
});