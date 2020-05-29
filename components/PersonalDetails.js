import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  FlatList} from 'react-native';
import { RectButton, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import {MakeReport} from '../components/MakeReport'

export const PersonalDetailsModalContext = createContext()

export default function PersonalDetails() {

  const [showDetails, setshowDetails] = useState(false);
  const [age, setAge] = useState();  
  const [healthNumber, setHealthNmber] = useState();
  const [selectFirstCountry, setSelectFirstCountry] = useState({name:'', code:''});
  const [selectSecondCountry, setSelectSecondCountry] = useState({name:'', code:''});
  

  const PersonalDetailsModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <PersonalDetailsModalContext.Provider value={{showDetails, setshowDetails}}>
        <MakeReport/>
      </PersonalDetailsModalContext.Provider>
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
 
