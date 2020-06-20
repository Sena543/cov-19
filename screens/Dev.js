import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { FlatList, TouchableOpacity, } from 'react-native-gesture-handler'


export default function DevScreen(){

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

    return(
        <View style={{flex:1, backgroundColor:'#ffffff',}}>
           <View style={{marginTop:10, borderRadius:10, backgroundColor:'#ffffff',}}>
                <FlatList
                data={data}
                renderItem={ ({item})=><DataList title={item.title} message={item.message}/>}
                keyExtractor = {item=> item.title}
                />
            </View>
        </View>
    )
}

/**
 * 
 *  <View style={{marginTop:10, borderRadius:10, backgroundColor:'#ffffff', elevation:2}}>
                <FlatList
                horizontal={true}
                data={dataTop}
                renderItem={ ({item})=><RenderVitalsData item={item}/>}
                keyExtractor = {item=> item.id}
                />
            </View>
 */