import { Ionicons, Entypo } from '@expo/vector-icons';
import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  FlatList, Modal} from 'react-native';

import Assessment from '../components/SelfAssessment.js';
// import TestingCenters from '../components/TestingCenters';
// import PersonalDetails from '../components/PersonalDetails';
import FAQs from '../components/FAQs';
// import Share from '../components/Share';
// import Privacy from '../components/PrivacyPolicy';
// import Audio from '../components/Audio';

// import FirstCountryPickerModal from '../components/FirstCountryPickerModal';
// import SecondCountryPickerModal from '../components/SecondCountryPickerModal';


//import countries from "../components/src/data/countries.json";

export const FirstCountryPickerModalContext = createContext();
export const SecondCountryPickerModalContext = createContext();
export const SettingsModalContext = createContext();

export default function Settings() {

  const [modalView, setModalView]= useState(false)


  const settingsData = [
   {title:'Self Assessment', message:'Ascertain your risk of covid 19 using our screening tool', component:Assessment},
   {title:'FAQs', message:'Get answers to frequently asked questions', component:FAQs },
  //  {title:'Testing Centers', message:'Find testing centers near you', component:TestingCenters},
  //  {title:'Personal Details', message:'View and update your personal details', component:PersonalDetails},
  //  {title:'Audio', message:'Listen to audio', component:Audio},
  //  {title:'Privacy Policy', message:'View our privacy policy', component:Privacy},
  //  {title:'Share', message:'Share this app with family and friends', component:Share},
 ]


 const RenderModal = ({Component})=>{
  return(
    <Modal
    animated='slide'
    visible={modalView}
    >
      <SettingsModalContext.Provider value={{modalView, setModalView}}>
        {Component}
      </SettingsModalContext.Provider>
    </Modal>
  )
}


  const RenderList = ({title, message, Comp})=>{

  return(
  <View style={{flex:1, borderBottomWidth:.4, height:95,flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
         <TouchableOpacity
         onPress={()=>{
           setModalView(true);
         }}
         >
         <View style={{flex:1,margin:30, marginBottom:10}}>
           <View  >
            <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
           </View>
          <View>
            <Text >{message}</Text>
          </View>
         </View>
         <View style={{flex:1, justifyContent:'flex-end', marginLeft:20, flexDirection:'row', alignItems:'center', marginBottom:30, marginLeft:40}}>
            <Entypo name='chevron-right'/>
          </View>
         </TouchableOpacity>
         <RenderModal Component={<Comp/>}/>
       </View>
   )
 }


 
   return (
     <View style={{flex:1, backgroundColor:'#ffffff'}}>
       <View style={{flex:1, justifyContent:'center', height:100, }}>
         <FlatList
         data={settingsData}
         renderItem={ ({ item })=> <RenderList title={item.title} message={item.message} Comp={item.component}/>}
         keyExtractor={item=>item.title}
         />
         </View>
     </View>
   );
}

// <Template Component={renderScreens}/>
//