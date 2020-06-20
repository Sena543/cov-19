import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal,  } from 'react-native';
import { FlatList, ScrollView,  TextInput } from 'react-native-gesture-handler';

import {SettingsModalContext} from '../../screens/Settings';


export const FAQModalContext = createContext()

export default function FAQ() {

  const {modalView, setModalView} = useContext(SettingsModalContext);
  const [expanded, setExpaned] = useState(false);

  const data = [
      {title:'How likely am I to catch covid', message:'Dude GFY'},
      {title:'Should I be worried about Covid-19:', message:'Did you go out recently?'},
      {title:'Who is at risk of developing severe illness', message:'Why you bab anaa?'},
      {title:'Is there a vaccine for treatment?', message:'You gon die man'},
  ]


  const DataList = ({title, message})=>{
      let mess = expanded? message: ''; 
      return(
          <View style={{margin:10, marginTop:10, borderRadius:10, backgroundColor:'#ffffff', elevation:1}}>
             <TouchableOpacity
             onPress={()=> setExpaned(!expanded)}
             >
                  <Text style={{fontSize:20, fontWeight:'bold', padding:20}}>{title}</Text>
                  <View style={{marginLeft:40,}}>
                      <Text>{mess}</Text>
                  </View>
             </TouchableOpacity>
         </View>
      )
  }




  return (
    <View style={{flex:1, backgroundColor:'#ffffff', borderRadius:50}}>
       <View style={{flex:.5}}>
        <View style={{flex:.25, margin:20, flexDirection:'row', justifyContent:'space-between',}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>FAQ</Text>
          <TouchableOpacity
           onPress={()=>  setModalView(!modalView)}
          >
            <Ionicons name='ios-close' size={30}/>
          </TouchableOpacity>
        </View>
       </View>
       <View style={{flex:1}}>
       <View style={{marginTop:10, borderRadius:10, backgroundColor:'#ffffff',}}>
                <FlatList
                data={data}
                renderItem={ ({item})=><DataList title={item.title} message={item.message}/>}
                keyExtractor = {item=> item.title}
                />
            </View>
       </View>
    </View>
  );
}
 
