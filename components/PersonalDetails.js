import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,TouchableOpacity,  FlatList} from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import FirstCountryPickerView from '../components/FirstCountryPickerModal'
import SecondCountryPickerView from '../components/SecondCountryPickerModal'
import countries from "../components/src/data/countries.json";

export const FirstCountryPickerModalContext = createContext()
export const SecondCountryPickerModalContext = createContext()

export default function PersonalDetails() {

  const [firstCountryModal, setFirstCountryModal] = useState(false);
  const [secondCountryModal, setSecondCountryModal] = useState(false);
  const [age, setAge] = useState();  
  const [healthNumber, setHealthNmber] = useState();
  const [selectFirstCountry, setSelectFirstCountry] = useState({name:'Ghana', code:'GH'});
  const [selectSecondCountry, setSelectSecondCountry] = useState({name:'United Kingdom', code:'GB'});
  

  const FirstCountryPickerModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={firstCountryModal}
   >
     <FirstCountryPickerModalContext.Provider value={{firstCountryModal, setFirstCountryModal, setSelectFirstCountry}}>
        <FirstCountryPickerView/>
      </FirstCountryPickerModalContext.Provider>    
   </Modal>
)
  }

  const SecondCountryPickerModal = ()=>{
    return(
    <Modal
    animationType="slide"
    visible={secondCountryModal}
    >
      <SecondCountryPickerModalContext.Provider value={{secondCountryModal, setSecondCountryModal, setSelectSecondCountry}}>
         <SecondCountryPickerView/>
       </SecondCountryPickerModalContext.Provider>    
    </Modal>
 )
   }

 


  return (
    <ScrollView style={{flex:1, backgroundColor:'#ffffff', borderRadius:30, marginLeft:5}}>
      <View style={{flex:.2}}>
        <View style={{flex:1, margin:20, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.2}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Personal Details</Text>
          <TouchableOpacity
          onPress={()=>  setFirstCountryModal(!firstCountryModal)}
          >
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
          keyboardType="number-pad"
          style={{borderWidth:.4,  marginRight:20, height:50}}
          />
        </View>
        <View style={{flex:1,margin:20}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>Travel History</Text>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', margin:10}}>
            <View style={{flex:.5,height:120, width:180, borderWidth:1.5, marginRight:10,
              borderRadius:20,alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity
              onPress={ ()=> {setFirstCountryModal(true)}}
              >
               <View style={{height:85, width:85}}>
                 <Image source={{uri:`https://www.countryflags.io/${selectFirstCountry.code}/shiny/64.png`}} style={{height:85, width:85}}/>
               </View>
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text>{selectFirstCountry.name}</Text>
               </View>
              </TouchableOpacity>
             <FirstCountryPickerModal/>
            </View>
            <View style={{flex:.5 ,height:120, width:180, borderWidth:1.5, borderRadius:20, marginLeft:10,
              alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity
              onPress={ ()=>setSecondCountryModal(true)}
              >
              <View style={{height:85, width:85}}>
                 <Image source={{uri:`https://www.countryflags.io/${selectSecondCountry.code}/shiny/64.png`}} style={{height:85, width:85}}/>
               </View>
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text>{selectSecondCountry.name}</Text>
               </View>
                
              </TouchableOpacity>
              <SecondCountryPickerModal/>
            </View>
          </View>
        </View>
        <View style={{margin:20, flex:1}}>
          <Text style={{fontWeight:'bold', fontSize:15, marginBottom:5}}>Medical Professional Information</Text>
          <Text style={{ marginBottom:10}}>Applicable if Health Professional</Text>
          <Text style={{marginTop:5}}>Health License Number</Text>
          <TextInput
          onChange={ (healthNumber)=> setHealthNmber(healthNumber)}
          keyboardType="number-pad"
          
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
    </ScrollView>
  );
}



