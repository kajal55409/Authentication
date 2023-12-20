import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DropdownSelector } from "io-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();
  const UserTypedata = [
    { name: "Admin", value: "Admin" },
    { name: "User", value: "User" },
  ];
  const loginUserData = {
    Email: email,
    userTypeData: UserTypedata,
  };
  const HandleLogin = async () => {

    try {
          if (!email.trim()) {
            alert("please enter the email");
            return;
          }
          if (!password.trim()) {
            alert("please enter the password");
            return;
          }
      await AsyncStorage.setItem(
        "UserLoginData",
        JSON.stringify(loginUserData)
      );
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View>
          <TextInput
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            style={styles.placeholderInput}
          />
          <TextInput
            value={password}
            placeholder="Enter your password"
            onChangeText={(text) => setpassword(text)}
            style={styles.placeholderInput}
          />
          <DropdownSelector
            Listdata={UserTypedata}
            containerStyle={{
              backgroundColor: "white",
              borderColor: "grey",
              borderWidth: 0.5,
              height: 80,
            }}
            title="Select the user type"
            dropdownTextStyle={{
              color: "black",
            }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            title="Login"
            //  onPress={() => navigation.navigate("Home")}
            onPress={()=>HandleLogin()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  placeholderInput: {
    height: "auto",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});
