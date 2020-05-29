import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  FlatList} from 'react-native';
import { RectButton, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/MakeReport'

export const TestingModalContext = createContext()

export default function PersonalDetails() {

  const [showReport, setShowReport] = useState(false);
  const [age, setAge] = useState()  
  const [healthNumber, setHealthNmber] = useState()  
  

  const TestingModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <TestingModalContext.Provider value={{showReport, setShowReport}}>
        <MakeReport/>
      </TestingModalContext.Provider>
   </Modal>
)
  }



  return (
    <View style={{flex:1, backgroundColor:'#ffffff', borderRadius:30, marginLeft:5}}>
      <View style={{flex:.2}}>
        <View style={{flex:1, margin:20, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.2}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Personal Details</Text>
          <TouchableOpacity>
            <Ionicons name='ios-close' size={30}/>
          </TouchableOpacity>
        </View>
       </View>
       <View style={{flex:1.5}}>
        <View style={{marginLeft:10}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Personal Details</Text>
        </View>
        <View style={{margin:20}}>
          <Text style={{fontWeight:'bold', fontSize:15, marginBottom:10}}>Enter Age</Text>
          <TextInput
          onChange={ (age)=> setAge(age)}
          style={{borderWidth:.4,  marginRight:20, height:50}}
          />
        </View>
        <View style={{flex:1,margin:20}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Travel History</Text>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', margin:10}}>
            <View style={{flex:.5,height:120, width:180, borderWidth:2, marginRight:10,
              borderRadius:20,alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity>
                <Text>First Modal</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:.5 ,height:120, width:180, borderWidth:2, borderRadius:20, marginLeft:10,
              alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity>
                <Text>First Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{margin:20, flex:1}}>
          <Text style={{fontWeight:'bold', fontSize:15, marginBottom:5}}>Medical Professional Information</Text>
          <Text style={{ marginBottom:10}}>Applicable if Health Professional</Text>
          <Text style={{marginTop:5}}>Health License Number</Text>
          <TextInput
          onChange={ (healthNumber)=> setHealthNmber(healthNumber)}
          style={{borderWidth:.4,  marginRight:20, height:50}}
          />
      </View>
    </View>
      <View>
        <TouchableOpacity
        onPress={ ()=> alert("Profile Updated")}
        >
          <View style={{backgroundColor:'black', alignItems:'center', justifyContent:'center',
           height:60, margin:10}}>
            <Text style={{color:'#ffffff'}}>Update Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 





/**
 Settings Screen

 const settingsData = [
  {title:'Self Assessment', message:'Ascertain your risk of covid 19 using our screening tool'},
  {title:'FAQs', message:'Get answers to frequently asked questions'},
  {title:'Testing Centers', message:'Find testing centers near you'},
  {title:'Personal Details', message:'View and update your personal details'},
  {title:'Audio', message:'Listen to audio'},
  {title:'Privacy Policy', message:'View our privacy policy'},
  {title:'Share', message:'Share this app with family and friends'},
]

const RenderList = ({title, message})=>{
  return(
      <View style={{borderBottomWidth:.3, height:95,flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <TouchableOpacity
        onPress={()=> console.log(title)}
        >
        <View style={{margin:30, marginBottom:10}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
          <Text>{message}</Text>
        </View>
        <View style={{justifyContent:'flex-end', marginLeft:20, flexDirection:'row', alignItems:'center'}}>
            <Ionicons name='ios-return-right'/>
          </View>
        </TouchableOpacity>       
      </View>
  )
}

  return (
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
      <View style={{flex:1, justifyContent:'center', height:100, }}>
        <FlatList
        data={settingsData}
        renderItem={ ({ item })=> <RenderList title={item.title} message={item.message}/>}
        keyExtractor={item=>item.title}
        />
        </View>
    </View>
  );
 */