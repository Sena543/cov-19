import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/MakeReport'

export const AssessmentModalContext = createContext()

export default function Assessment() {

  const [showReport, setShowReport] = useState(false)

  

  const AssessmentModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <AssessmentModalContext.Provider value={{showReport, setShowReport}}>
        <MakeReport/>
      </AssessmentModalContext.Provider>
   </Modal>
)
  }


  return (
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
      <View style={{flex:.3,marginLeft:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>Self Assessment</Text>
      </View>
      <View style={{flex:1}}>
        <View style={{margin:30}}>
          <Text style={{fontWeight:'bold', fontSize:30}}>Getting Started!</Text>
          <Text>
            This tool is to help you understand what to do next after covid-19. You'll answer a few questions about 
            your symptoms, travel and contact you've had with others
          </Text>
        </View>
        <View style={{marginLeft:30}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Note</Text>
          <Text>
            Recomendations provided by this does not constitute medical advice and should not be used and diagnosis 
            or treatment of medical conditions.
          </Text>
          <Text style={{marginTop:10}}>
            Let's all look out for each other by knowing our status, trying not to infect others and reserving care for
            those in need.
          </Text>
        </View>
      </View>
      <View style={{flex:1, justifyContent:'flex-end'}}>
          <TouchableOpacity>
            <View style={{backgroundColor:'black', height:60, alignItems:'center', justifyContent:'center', marginLeft:40, marginRight:40 }}>
                <Text style={{color:'#ffffff'}}>Start Assessment...</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
