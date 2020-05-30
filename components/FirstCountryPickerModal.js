import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,TouchableOpacity,  FlatList} from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import {FirstCountryPickerModalContext} from '../screens/Settings'
import countries from "./src/data/countries.json";


export default function FirstCountryPickerView() {

    const {firstCountryModal, setFirstCountryModal, setSelectFirstCountry} = useContext(FirstCountryPickerModalContext);
    
    const c = [
        {
            "name": "Afghanistan",
            "alpha2Code": "AF"
          },
          {
            "name": "Åland Islands",
            "alpha2Code": "AX"
          },
    ]
    const RenderCountries = ({name, code})=>{
        return(
          <View style={{flex:1, flexDirection:'row',marginLeft:10, marginRight:10 ,borderBottomWidth:.2 }}>
          <TouchableOpacity
           onPress={ ()=>{
               console.log(name, code);
               setSelectFirstCountry({name, code})
               setFirstCountryModal(!firstCountryModal)}}
          >
            <View style={{justifyContent:'center', flexDirection:'row'}}>
             <Image source={{uri:`https://www.countryflags.io/${code}/shiny/64.png`}} style={{height:85, width:85}}/>
             <View style={{justifyContent:'center', marginLeft:10 }}>
              <Text>{name}</Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
        )
      }
    
      return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <View style={{flex:.2}}>
            <View style={{flex:1, margin:20, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.2}}>
              <Text style={{fontWeight:'bold', fontSize:25}}>Select Country</Text>
              <TouchableOpacity
              onPress={ ()=>  setFirstCountryModal(!firstCountryModal)}
              >
                <Ionicons name='ios-close' size={30}/>
              </TouchableOpacity>
            </View>
           </View>
          <FlatList
          data={c}
          renderItem={ ({item})=> <RenderCountries name={item.name} code={item.alpha2Code}/>}
          keyExtractor={ item=> item.alpha2Code}
          />
        </View>
  );
}
 

 
/**
 
  
 */