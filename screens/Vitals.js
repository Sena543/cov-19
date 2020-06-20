import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { RectButton, ScrollView, TextInput, FlatList } from 'react-native-gesture-handler';
import {  gql } from "apollo-boost";
import { graphql } from "react-apollo";

import LogSysmptoms from '../components/vitals/LogSymptoms'
export const SymptomContext = createContext()

export default function Vitals() {

  const [vitals,setLogVitals] = useState(false);
  const [vitalsData, setVitalsData] = useState([]);

  const SysmptomModal = ()=>{
    return(
      <Modal
      animationType="slide"
      visible={vitals}
      >
       <SymptomContext.Provider value={{vitals, setLogVitals}}>
        <LogSysmptoms/>
       </SymptomContext.Provider>
      </Modal>
    )
  }

  if(vitalsData.length>1){
    console.log('Vitals data')
  }

  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:'#ffffff'}}>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/images/ecg1.gif')} style={{height:120, width:120}}/>
    </View>
    <View style={{margin:50}}>
      <Text> You have not logged your vitals yet </Text>
    </View>
    <View style={{flex:1,}}>
      <TouchableOpacity
      onPress={ ()=> setLogVitals(true)}
      >
        <View style={{borderWidth:1, height:50, width:140, alignItems:'center', justifyContent:'center', borderStyle: 'dashed',}}>
          <Text> Log Vitals </Text>
        </View>
        <SysmptomModal/>
      </TouchableOpacity>
    </View>
  </View>
  );
}


/**
 <View style={{flex:1, alignItems:'center', backgroundColor:'#ffffff'}}>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/images/heart.gif')} style={{height:120, width:120}}/>
    </View>
    <View style={{margin:50}}>
      <Text> You have not logged your vitals yet </Text>
    </View>
    <View style={{flex:1,}}>
      <TouchableOpacity
      onPress={ ()=> setShowVitals(true)}
      >
        <View style={{borderWidth:1, height:50, width:140, alignItems:'center', justifyContent:'center', borderStyle: 'dashed',}}>
          <Text> Log Vitals </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
 */

 