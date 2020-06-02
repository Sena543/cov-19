import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity  } from 'react-native';
import { RectButton, ScrollView,  TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/MakeReport';

export const AssessmentModalContext = createContext();
import {SettingsModalContext} from '../screens/Settings';

export default function Assessment() {

  const {modalView, setModalView} = useContext(SettingsModalContext);
  const [showReport, setShowReport] = useState(false);


  return (
    <View style={{flex:1, backgroundColor:'#ffffff', borderRadius:20}}>
       <View style={{flex:.2}}>
        <View style={{flex:1, margin:20, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.2}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Self Assessment</Text>
          <TouchableOpacity
          onPress={()=>  setModalView(!modalView)}
          >
            <Ionicons name='ios-close' size={30}/>
          </TouchableOpacity>
        </View>
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
 
