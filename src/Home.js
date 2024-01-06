import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Admin_home from "./Admin_home";
import Home_user from "./Home_user";

const Home = () => {
  const [userType, setUsertype] = useState();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const userLoginData = JSON.parse(
        await AsyncStorage.getItem("UserLoginData")
      );
   
      console.log("userdata", userLoginData.userTypeData);
         setUsertype(userLoginData.userTypeData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Main home</Text>
        {userType === "User" ? <Home_user /> : <Admin_home />}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
