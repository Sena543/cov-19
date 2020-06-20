import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Modal,  } from 'react-native';
import { RectButton, ScrollView,  TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/reports/MakeReport'

export const ReportModalContext = createContext()

export default function Report() {

  const [showReport, setShowReport] = useState(false)

  

  const ReportModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <ReportModalContext.Provider value={{showReport, setShowReport}}>
        <MakeReport/>
      </ReportModalContext.Provider>
   </Modal>
)
  }


  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:'#ffffff'}}>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/images/quest.gif')} style={{height:120, width:70}}/>
    </View>
    <View style={{margin:50}}>
      <Text> You have not made any case reports </Text>
    </View>
    <View style={{flex:1,}}>
      <TouchableOpacity
      onPress={ ()=> setShowReport(true)}
      >
        <View style={{borderWidth:1, height:50, width:140, alignItems:'center', justifyContent:'center', borderStyle: 'dashed',}}>
          <Text> Make case report </Text>
        </View>
        <ReportModal/>
      </TouchableOpacity>
    </View>
</View>
  );
}
 

/**
 <View style={{flex:1, alignItems:'center', backgroundColor:'#ffffff'}}>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/images/quest.gif')} style={{height:120, width:70}}/>
    </View>
    <View style={{margin:50}}>
      <Text> You have not made any case reports </Text>
    </View>
    <View style={{flex:1,}}>
      <TouchableOpacity>
        <View style={{borderWidth:1, height:50, width:140, alignItems:'center', justifyContent:'center', borderStyle: 'dashed',}}>
          <Text> Make case report </Text>
        </View>
      </TouchableOpacity>
    </View>
</View>
 */