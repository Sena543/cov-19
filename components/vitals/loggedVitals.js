import React from 'react'
import {View, Text} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


export default function LoggedVitals(){


    const dataTop = [
        {id:'1',Topname:'Aches' ,data:2, topDescription:'None', Topcolor:'#2bfc90', Bottomname:'Dry Cough', data:1, Bottomcolor:'#46c2f2',},
        {id:'2',Topname:'Breath' ,data:2, topDescription:'High', Topcolor:'#f52f25', Bottomname:'Tiredness' ,data:1, Bottomcolor:'#ffa10a',},
        {id:'3',Topname:'Fever' ,data:2, topDescription:'Mild', Topcolor:'#46c2f2', Bottomname:'Sore Throat' ,data:1, Bottomcolor:'#cf5df5',},
    ]


    const RenderVitalsData = ({item})=>{
        return(
            <View style={{flex:1, margin:10}}>
                <View style={{padding:10, backgroundColor:item.Topcolor, height:120, width:120, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                    <View style={{ alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#ffffff', fontSize:15}}>{item.Topname}</Text>
                        <Text style={{color:'#ffffff', fontSize:15}}>2</Text>
                        <Text style={{color:'#ffffff', fontSize:15}}>None</Text>
                    </View>
                </View>
                <View style={{marginTop:10, backgroundColor:item.Bottomcolor, height:120, width:120, 
                    borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                    <View style={{ alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#ffffff', fontSize:15}}>{item.Bottomname}</Text>
                        <Text style={{color:'#ffffff', fontSize:15}}>4</Text>
                        <Text style={{color:'#ffffff', fontSize:15}}>None</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
    
    return(
        <View style={{flex:1, backgroundColor:'#ffffff',}}>
            <View style={{marginTop:10, borderRadius:10, backgroundColor:'#ffffff', elevation:2}}>
                <FlatList
                horizontal={true}
                data={dataTop}
                renderItem={ ({item})=><RenderVitalsData item={item}/>}
                keyExtractor = {item=> item.id}
                />
            </View>
            <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
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