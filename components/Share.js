import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/MakeReport'

export const FAQModalContext = createContext()

export default function Share() {

  const [showReport, setShowReport] = useState(false)

  

  const FAQModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <FAQModalContext.Provider value={{showReport, setShowReport}}>
        <MakeReport/>
      </FAQModalContext.Provider>
   </Modal>
)
  }


  return (
    <View style={{flex:1, backgroundColor:'#ffffff', borderRadius:50}}>
       <View style={{flex:.5}}>
        <View style={{flex:.25, margin:20, flexDirection:'row', justifyContent:'space-between',}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>FAQ</Text>
          <TouchableOpacity>
            <Ionicons name='ios-close' size={30}/>
          </TouchableOpacity>
        </View>
       </View>
       <View style={{flex:1}}>
         <View></View>
       </View>
    </View>
  );
}
 
