import React, { useState } from "react";
import { View, Text, ImageBackground, } from 'react-native';
import {  TextInput, TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {graphql } from 'react-apollo';

// const getUserReportedCases = gql`
// {
//     query useReportedCases(){
//    reporting
//    description,
//    createdAt
//     }
// }
// `


 function CaseReportList(){

    const reportList = [
        {name:'Self', report:"My head aches and I'm running a fever", time:'Thursday'},
        {name:'Self', report:"My head aches and I'm running a fever", time:'Monday'}
    ]

    const RenderList = ()=>{
        return(
            <View style={{flex:.19, margin:20, borderBottomWidth:.5, height:80}}>
                <View style={{marginBotom:40,flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Self</Text>
                    <Text style={{fontWeight:'bold', fontSize:15}}>Thursday</Text>
                </View>
                <View style={{marginTop:15}}>
                    <Text>My head aches and I'm running a fever</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <View style={{flex:1,}}>
            <FlatList
            data={reportList}
            renderItem={ ({item})=> <RenderList name={item.name} report={item.report} time={item.time} /> }
            keyExtractor = { item=> item.time}
            />
            </View>
            <View style={{flex:.5, justifyContent:'flex-end', alignItems:'flex-end'}}>
                <TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems:'center', margin:20,
                    backgroundColor:'#0a0a0a', height:80, width:80, borderRadius:60}}>
                        <Text style={{color:'#ffffff', fontSize:30}}>+</Text>
                    </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default (CaseReportList);