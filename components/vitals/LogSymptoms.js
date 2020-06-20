import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FlatList } from 'react-native-gesture-handler';

import { SymptomContext } from '../../screens/Vitals'

export default function LogSymptoms() {

  const {vitals,setLogVitals }= useContext(SymptomContext);

  const [cough, setCough] = useState(0);
  const [tiredness, setTiredness] = useState(0);
  const [soreness, setSoreness] = useState(0);
  const [fever, setFever] = useState(0);
  const [pains, setPains] = useState(0);
  const [breath, setBreath] = useState(0);

  const [bgColor, setbgColor] = useState('#ffffff')

  const colours = {
    viewColor:'#31546b',
    textColor:'#ffffff'
  }

  const numbers = [
    {id:"0", type:"None"},
    {id:"1", type:"Mild"},
    {id:"2", type:"Mid"},
    {id:"3", type:"Semi"},
    {id:"4", type:"High"},
  ]

  const symptoms = [
    {name:"Dry Cough"},
    {name:"Tiredness"},
    {name:"Sore Throat"},
    {name:"Fever"},
    {name:"Aches and Pains"},
    {name:"Shortness of Breath"},
  ]

  const NumberOptions = ({num, des, name})=>{

    const handlePress = ()=>{
      console.log(num, des, name)
      //setbgColor(colours.viewColor)
    }

    return(
      <View>
        <View style={{backgroundColor:'#31546b', height:50, width:50, borderRadius:100, justifyContent:'center', alignItems:'center', marginLeft:6}}>
          <TouchableOpacity
          onPress={ handlePress}
          >
            <View style={{backgroundColor:bgColor, height:47, width:47, borderRadius:50, justifyContent:'center' ,alignItems:'center'}}>
              <Text style={{fontSize:25, color:'#000000'}}>{num}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:15, marginTop:8}}>
          <Text>{des}</Text>
        </View>
      </View>
    )
  }

  const Cards = ({name})=>{
    return(
      <View style=
      {{flex:.75, margin:10, backgroundColor:'#ffffff', borderRadius:20, height:120,  shadowColor: '#000',shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,}}>
      <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold',marginTop:5}}>{name}</Text>
      <View style={{flex:.01, borderWidth:.4, borderColor:'#dbdbdb', marginTop:10, marginRight:25}}></View>
      <View style={{ marginTop:10}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={numbers}
        renderItem={ ({item})=> <NumberOptions num={item.id} des={item.type} name={name}/>}
        keyExtractor={(item)=> item.id}
        />
      </View>
      </View>
      
    </View> 
    )
  }
 

  return (
  <View style={{flex:1,  backgroundColor:'#ffffff', borderTopRightRadius:40, borderTopLeftRadius:40}}>
    <View style={{flex:.1,margin:20, flexDirection:'row', justifyContent:'space-between',}}>
      <Text style={{fontWeight:'bold', fontSize:25}}>Log Symptoms</Text>
        <TouchableOpacity
         onPress={ ()=> setLogVitals(!vitals)}
        >
          <Ionicons name='ios-close' size={30}/>
        </TouchableOpacity>
    </View>
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
      <FlatList
      data={symptoms}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item})=> <Cards name={item.name}/> }
      keyExtractor={ item=>item.name}
      />
    </View>
   <TouchableOpacity
   onPress={ ()=> setLogVitals(!vitals)}
   >
    <View style={{alignItems:'center',justifyContent:'center', backgroundColor:'#31546b',marginLeft:55, marginRight:55, borderRadius:20, height:50, marginBottom:20}}>
      <Text style={{color:'#ffffff'}}>Log Vitals</Text>
    </View>
   </TouchableOpacity>
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

 