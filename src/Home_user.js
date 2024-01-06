import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home_user = () => {
const [data,setData]=useState()
      useEffect(() => {
        getUser();
      }, []);

      const getUser = async () => {
        try {
          const userLoginData = JSON.parse(
            await AsyncStorage.getItem("UserRegisterData")
            
          );
          setData(userLoginData);
          console.log("userdata", userLoginData);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <View>
      {/* <Text>Name:{data.Name}</Text> */}
      {/* <Text>Email:{data.Email}</Text> */}
      <Text>user home</Text>
    </View>
  );
}

export default Home_user

const styles = StyleSheet.create({})