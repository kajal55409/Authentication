import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DropdownSelector } from "io-elements";
const Registration = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [Dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [habits, setHabits] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
const UserTypedata = [
  { name: "Admin", value: "Admin" },
  { name: "User", value: "User" },
];
  const userData = {
    Name: name,
    Email: email,
    ProfilePhoto: image,
  };
  const HandleSignUp = async () => {
    if (!name.trim()) {
      alert("please enter the name");
      return;
    }
    if (!email.trim()) {
      alert("Please enter the email");
      return;
    }
    if (!phoneNo.trim()) {
      alert("Please enter the Phone no");
      return;
    }
    if (!Dob.trim()) {
      alert("Please enter the Date of birth");
      return;
    }
    if (!gender.trim()) {
      alert("Please enter the gender");
      return;
    }
    if (!habits.trim()) {
      alert("Please enter the habits");
      return;
    }
    if (!description.trim()) {
      alert("Please enter the description");
      return;
    }
      if (UserTypedata === "") {
        alert("Please enter the user type");
        return;
      }
    try {
      await AsyncStorage.setItem("UserRegisterData", JSON.stringify(userData));
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TextInput
              value={name}
              placeholder="Enter your name"
              onChangeText={(text) => setName(text)}
              style={styles.placeholderInput}
            />
            <TextInput
              value={email}
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
              style={styles.placeholderInput}
            />
            <TextInput
              value={phoneNo}
              placeholder="Enter your Phone number"
              onChangeText={(text) => setphoneNo(text)}
              keyboardType="name-phone-pad"
              style={styles.placeholderInput}
            />
            <TextInput
              value={Dob}
              placeholder="Enter your name"
              onChangeText={(text) => setDob(text)}
              style={styles.placeholderInput}
            />
            <TextInput
              value={gender}
              placeholder="Enter your gender"
              onChangeText={(text) => setGender(text)}
              style={styles.placeholderInput}
            />
            <TextInput
              value={habits}
              placeholder="Enter your habits"
              onChangeText={(text) => setHabits(text)}
              style={styles.placeholderInput}
            />
            <TextInput
              value={description}
              placeholder="About me.."
              onChangeText={(text) => setdescription(text)}
              style={[styles.placeholderInput, { height: 80 }]}
            />
            <View style={{marginBottom:10}}>
              <DropdownSelector
                Listdata={UserTypedata}
                containerStyle={{
                  backgroundColor: "white",
                  borderColor: "grey",
                  borderWidth:0.5,
                  height:80
                }}
                title="Select the user type"
                dropdownTextStyle={{
                  color: "black",
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => pickImage()}
              >
                <Text style={styles.buttonText}>Browse the profile pic</Text>
              </TouchableOpacity>

              {image && (
                <Image source={{ uri: image }} style={styles.profileImage} />
              )}
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Registration"
              // onPress={() => navigation.navigate("Login")}
              onPress={() => HandleSignUp()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;

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
  button: {
    height: 40,
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: "center",
  },
});
