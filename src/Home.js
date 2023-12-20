import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Admin_home from "./Admin_home";
import Home_user from "./Home_user";


const Home = () => {
  const [userType,setUsertype]=useState()
  useEffect(()=>{
    getUser()
  },[])

  const getUser = async ()=>{
    try{
      const userLoginData = JSON.parse(
        await AsyncStorage.getItem("UserLoginData")
      );
       setUsertype(userLoginData.userTypeData);
      console.log("userdata", userLoginData.userTypeData);
    }catch(error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Home</Text>
        {}
        <Admin_home />
        <Home_user/>
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
