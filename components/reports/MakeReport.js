import { Ionicons } from '@expo/vector-icons';
import  React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Button } from 'react-native';
import { RectButton, ScrollView,  TextInput } from 'react-native-gesture-handler';
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {graphql } from 'react-apollo';

import Report, {ReportModalContext} from '../../screens/Report';

const reportMutation = gql`
  {
    mutation reportCaseMutation{
    reportCase($reportWho: String!, 
  $location: String!, $landmark: String!, 
  $alternateContact: String!, $description: String!)}
}
`

function MakeReport(){

    const {showReport, setShowReport} = useContext(ReportModalContext);

    const [report, {data}] = useMutation(reportMutation)

    const [reportWho, setReportWho] = useState('')
    const [location, setLocation] = useState('eg Goil Filling Station');
    const [landmark, setLandmark] = useState('eg GA-492-74');
    const [contact, setContact] = useState('Contact');
    const [description, setDescription] = useState('Describe Symptoms');

    const sendReport = ()=>{
      report({variables:{
        reportWho: reportWho,
        location: landmark,
        alternateContact: contact,
        description: description
      }})
      setShowReport(!showReport);
    }

    return(
        <View style={{flex:1, backgroundColor:'#ffffff',borderRadius:50}}>
        <View style={{margin:20, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Make Report</Text>
         <TouchableOpacity
          onPress={ ()=> setShowReport(!showReport)}
         >
            <Ionicons name='ios-close' size={30}/>
         </TouchableOpacity>
        </View>
        <View style={{flex:1,marginLeft:20}}>
         <View style={{flex:.5,}}>
           <Text  style={{fontWeight:'bold', }}>Who are you reporting</Text>
         </View>
          <View style={{flex:1, flexDirection:'row',marginTop:12}}>
            <View style={{flexDirection:'row', marginLeft:20}}>
              <View style={{backgroundColor:'#ffffff'}}>
                <TouchableOpacity
                onPress={ ()=>setReportWho('Self Report')}
                >
               <Ionicons name='ios-checkmark-circle' color={reportWho==='Self Report'? '#a3a2a2':'#000000'} size={25}/>
               </TouchableOpacity>
              </View>
              <Text  style={{marginLeft:5}}>Self</Text>
            </View>
            <View style={{flex:1,flexDirection:'row', marginLeft:100}}>
              <View style={{backgroundColor:'#ffffff',}}>
              <TouchableOpacity
                onPress={ ()=>setReportWho('Other Individual')}
                >
                <Ionicons name='ios-checkmark-circle' color={reportWho==='Other Individual'? '#a3a2a2':'#000000'} size={25}/>
               </TouchableOpacity>
              </View>
              <Text style={{marginLeft:5}}>Other Individual</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1,}}>
        <View style={{marginLeft:20, marginTop:18}}>
          <Text style={{fontWeight:'bold', }}>Location or Digital Address</Text>
        </View>
        <View>
          <TextInput
           style={{ height: 40, borderColor: '#9c9a9a', borderWidth:.5, marginTop:10, marginLeft:20, marginRight:20 }}
           onChangeText={text => setLocation(text)}
           value={location}
          />
        </View>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
          <View style={{marginLeft:20, marginTop:18}}>
          <Text style={{fontWeight:'bold', }}>Nearest Landmark</Text>
        </View>
        <View>
          <TextInput
           style={{ height: 40, width:120, borderColor: '#9c9a9a', borderWidth:.5, marginTop:10, marginLeft:20, marginRight:20 }}
           onChangeText={text => setLandmark(text)}
           value={landmark}
          />
        </View>
          </View>
          <View style={{flexDirection:'column'}}>
          <View style={{marginLeft:20, marginTop:18}}>
          <Text style={{fontWeight:'bold', }}>Alternate Contact</Text>
        </View>
        <View>
          <TextInput
           style={{ height: 40, width:120, borderColor: '#9c9a9a', borderWidth:.5, marginTop:10, marginLeft:20, marginRight:20 }}
           onChangeText={text => setContact(text)}
           value={contact}
          />
        </View>
          </View>
        </View>
        <View style={{flex:1,}}>
        <View style={{marginLeft:20, marginTop:18}}>
          <Text style={{fontWeight:'bold', }}>Description</Text>
        </View>
          <View style={{flex:1,}}>
            <TextInput
            style={{ height: 70, borderColor: '#9c9a9a', borderWidth:.5, marginTop:10, marginLeft:20, marginRight:20 }}
            onChangeText={text => setDescription(text)}
            value={description}
            numberOfLines={5}
            />
          </View>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
        <TouchableOpacity
        onPress={ sendReport}
         >
      <View style={{alignItems:'center',justifyContent:'center', backgroundColor:'#000000', marginTop:20,marginLeft:55, marginRight:55, borderRadius:20, height:55, width:100}}>
        <Text style={{color:'#ffffff'}}>Make Report</Text>
      </View>
        </TouchableOpacity>
      </View>
      </View>
    )
}

export default graphql (reportMutation)(MakeReport);