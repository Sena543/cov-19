import * as WebBrowser from 'expo-web-browser';
import React ,{useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {graphql } from 'react-apollo';

import { MonoText } from '../components/StyledText';

const countriesDataQuery = gql`
{
  country(name:"Ghana"){
    result{
      cases,
      recovered,
      deaths,
      updated
    }
  }
}
`

function HomeScreen() {
    
  const {loading, error, data} = useQuery(countriesDataQuery);
  //console.log(data.country.result.cases)
  if(loading){return 'loading';}
  if(error) return error;

  const listData=[
    { id: "1", image: require('../assets/images/virus.jpg'), title:'Confirmed Cases', numbers:data.country.result.cases },
    { id: "2", image: require('../assets/images/sanitizer.jpg'), title:'Recovered', numbers:data.country.result.recovered },
    { id: "3", image: require('../assets/images/reaper.jpg'), title:'Deaths', numbers:data.country.result.deaths },
  ]


  const DataList= ({image, title, numbers})=>{
    return(
      <View style={{borderRadius:50,}}>
        <ImageBackground source={image} style={{width:200, height:120,borderRadius:50, resizeMode:'contain', marginTop:20, marginRight:15, alignItems:'flex-end', marginLeft:15}}>
          <Text style={{color:'#ffffff', margin:10, fontSize:20, fontWeight:'bold'}}>{numbers===null ? "N/A":numbers}</Text>
          <Text style={{color:'#ffffff', margin:5, fontSize:15, fontWeight:'bold'}}> {title} </Text>
        </ImageBackground>
      </View>
    )
  }

  return (
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
      <View style={{flex:.5, borderRadius:100}}>
        <FlatList
        horizontal= {true}
        data={listData}
        renderItem={ ({item})=> <DataList image={item.image} title={item.title} numbers={item.numbers}/>}
        keyExtractor={ item=> item.id}
        />
      </View>
      <View style={{flex:.2, margin:15}}>
        <Text style={{fontWeight:'bold'}}>Ghana's Situation Update</Text>
        <Text>Last Update:{data.country.result.updated}</Text>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={{flex:.1, alignItems:'center'}}>
          <Text style={{fontWeight:'bold'}}>Confirmed Cases in Ghana as at {data.country.result.updated}</Text>
        </View>
        <View style={{borderBottomWidth:.5, borderBottomColor:'#919191', marginLeft:20, marginRight:20, marginTop:10}}></View>
        <View style={{flex:1, margin:30, backgroundColor:'#ffffff'}}>
          <Text>
            Lorem ipsum dolor sit amet, elit fuisset ex mea. Eam ad erant nihil impedit, est cu veritus volutpat ullamcorper. Dicant nonumy sea eu. 
            Appetere adipiscing scriptorem ius eu, definiebas reformidans ei per.
            His habeo omnes ad, pro oportere consetetur sadipscing id. Tempor copiosae signiferumque at duo, nulla atomorum mea an, deseruisse complectitur qui ne. 
            Ei minimum contentiones
            signiferumque nam. At detracto verterem consequuntur sit.
            Te mei doctus corpora facilisi, qui facilis explicari necessitatibus te. 
            Nisl fabulas mediocrem ex quo. Harum neglegentur ei mei. Ne per autem eripuit, qui numquam civibus et. 
            Eum no causae aliquid, libris dolorem pro ei, solum utamur appetere his id.
            Reque verear salutatus sed in. At mazim explicari eam, ius ne unum intellegebat, vel ullum novum partiendo et. 
            Malorum luptatum oporteat pro ad, ad cibo qualisque per. Quem dictas 
            ei vel, id paulo expetendis repudiandae nam. Saepe delenit feugait ne qui.
            Iriure mentitum persecuti mea ex, pri disputationi conclusionemque cu, prompta posidonium ex pri. 
            Quo propriae sadipscing et. Nostro utroque expetenda in sed, te nam mazim eirmod 
            reformidans, ex mea agam minimum menandri. Justo posse alienum ne vis, ne usu aperiam noluisse, eos ex impedit persequeris reprehendunt. 
            Eum te utroque ancillae dissentiunt. 
            Lobortis gubergren temporibus te vim, sea cu quidam corrumpit, ex decore ridens pro.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default graphql (countriesDataQuery)(HomeScreen);