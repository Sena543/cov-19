import React from "react"; 
import { createStackNavigator, } from "@react-navigation/stack";
import { NavigationContainer, StackActions } from '@react-navigation/native';

import Register from '../components/auth/Register'
import Verification from '../components/auth/Verification'
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();
export default function Verify(){

    
  const loginHandler = async(value)=>{
    try{
      await AsyncStorage.setItem('isLoggedIn', value)
    }catch(e){
      console.log(e)
    }
  }

  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn')
      if(value !== null) {
      return false
    }
  } catch(e) {
    console.log(e)
  }
  return value
}


    return(
        <NavigationContainer>
            <Stack.Navigator>
              {getData ?
                <>
                  <Stack.Screen 
                    name="Root"  
                    component={BottomTabNavigator} />
                </>:
                <>
                  <Stack.Screen 
                        name=" " 
                        component={Register}                   
                        />
                    <Stack.Screen 
                        name="  " 
                        component={Verification} 
                        />
                </>}
            </Stack.Navigator>
        </NavigationContainer>
    )    
}