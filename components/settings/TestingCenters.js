import { Ionicons } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  FlatList} from 'react-native';
import { RectButton, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

//import {MakeReport} from '../MakeReport'
import {SettingsModalContext} from '../../screens/Settings';

export const TestingModalContext = createContext()

export default function Testing() {

  const [showReport, setShowReport] = useState(false);
  const {modalView, setModalView} = useContext(SettingsModalContext);
  
  const locationData = [
    {centername:'ani-fori medical institute', date:'Tuesday, Apr 14 2020', city:'Accra, Ghana'},
    {centername:'Here we go', date:'Tuesday, Apr 14 2020', city:'Accra, Ghana'},
    {centername:'Royal Medical Center', date:'Tuesday, Apr 14 2020', city:'Accra, Ghana'},
    {centername:'Atomic Hospital', date:'Sunday, Apr 12 2020', city:'Accra, Ghana'},
  ]

//   const TestingModal = ()=>{
//    return(
//    <Modal
//    animationType="slide"
//    visible={showReport}
//    >
//       <TestingModalContext.Provider value={{showReport, setShowReport}}>
//         <MakeReport/>
//       </TestingModalContext.Provider>
//    </Modal>
// )
//   }

  const RenderLocations = ({centername, city})=>{
    return(
      <View>
        <View style={{borderBottomWidth:.2}}>
           <View style={{justifyContent:'space-between', flexDirection:'row',marginBottom:10,  marginTop:30}}>
             <Text style={{fontWeight:'bold', fontSize:15}}>{centername}</Text>
             <Text>Tuesday, Apr 14 2020</Text>
           </View>
           <View style={{justifyContent:'space-between', flexDirection:'row',marginBottom:20, marginTop:30}}>
             <Text>{city}</Text>
             <TouchableOpacity>
              <Text style={{color:'gold'}}>Get Directions</Text>
            </TouchableOpacity>
           </View>
         </View>
      </View>
    )
  }


  return (
    <View style={{flex:1, backgroundColor:'#ffffff', borderRadius:50}}>
       <View style={{flex:.2}}>
        <View style={{flex:1, margin:20, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.2}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Testing Centers</Text>
          <TouchableOpacity
           onPress={()=>  setModalView(!modalView)}
          >
            <Ionicons name='ios-close' size={30}/>
          </TouchableOpacity>
        </View>
       </View>
       <View style={{flex:1, margin:15,}}>
       <FlatList
           data={locationData}
           renderItem={ ({item})=> <RenderLocations centername={item.centername} city={item.city} 
           />}
           keyExtractor={ item=> item.centername}
           />
       </View>
    </View>
  );
}
 
