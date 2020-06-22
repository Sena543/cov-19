import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, createContext} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';

import LinkingConfiguration from './navigation/LinkingConfiguration';
import Register from './components/auth/Register'
import Verification from './components/auth/Verification'
import Verify from './navigation/Verify'
import { ApolloProvider} from '@apollo/react-hooks';
import ApolloClient,{InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://signalc.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

 const countries = new ApolloClient({
  uri: 'https://covid19-graphql.netlify.app/',
  cache:new InMemoryCache(),
 })

const Stack = createStackNavigator();
export const VerificationContext = createContext();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client, countries}>
        <VerificationContext.Provider value={{isLoggedIn, setIsLoggedIn,loginHandler}}>
            <Verify/>
      </VerificationContext.Provider>
    </ApolloProvider>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
