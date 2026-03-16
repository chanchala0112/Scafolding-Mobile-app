import React, { useState } from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert
} from "react-native";

export default function ForgotPassword({navigation}){

const [email,setEmail] = useState("");

const resetPassword = () => {

if(email === ""){
Alert.alert("Error","Enter your email");
return;
}

Alert.alert("Success","Password reset link sent");

navigation.navigate("Login");
}

return(

<View style={styles.container}>

<Text style={styles.title}>Forgot Password</Text>

<TextInput
placeholder="Enter your email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<TouchableOpacity style={styles.button} onPress={resetPassword}>
<Text style={styles.buttonText}>Reset Password</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={styles.link}>Back to Login</Text>
</TouchableOpacity>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20,
backgroundColor:"#fff"
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:30
},

input:{
width:"100%",
backgroundColor:"#f1f1f1",
padding:15,
borderRadius:10,
marginBottom:20
},

button:{
backgroundColor:"#f7931e",
padding:15,
width:"100%",
borderRadius:30,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold"
},

link:{
marginTop:20,
color:"#555"
}

});