import React, { useState } from "react";
import {KeyboardAvoidingView, View, Text, ImageBackground, ActivityIndicator, } from 'react-native';
import { TouchableHighlight, TextInput, TouchableOpacity, ScrollView } from "react-native-gesture-handler";


export default function Reigister({navigation}){

    const [phoneNumber, setPhoneNumber] = useState();
    const [ isLoading, setIsLoading] = useState(false);

    const handlePress = ()=>{
        setIsLoading(!isLoading); navigation.navigate('  ', {contact: phoneNumber})
    }

    return(
        <KeyboardAvoidingView style={{flex:1}}>
           <ImageBackground source={require('../../assets/images/virus.jpg')} style={{flex:1}}>
               <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                   <Text style={{color:'#ffffff', fontSize:80, fontWeight:'normal'}}>Covers</Text>
                   <View style={{flex:.5, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#ffffff', fontSize:15, fontWeight:'normal'}}>COVID-19 EMERGENCY RESPONSE SOLUTION</Text>
                        <Text  style={{color:'#ffffff',paddingLeft:50}}>Join the effort by well-meaning Africans using technology to slow down and eventually halt the
                            covid-19
                        </Text>
                   </View>
               </View>
               <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <TextInput
                style={{flex:.2, height: 60, width:400, backgroundColor: '#ffffff', borderWidth:.2, marginTop:10, 
                marginLeft:20, marginRight:20, }}
                keyboardType='number-pad'
                placeholder= 'Phone Number'
                onChangeText={text => setPhoneNumber(text)}
                value={phoneNumber}
                />
                <View style={{flex:.5, alignItems:'center', marginTop:40 }}>
                   <TouchableOpacity
                   onPress={handlePress}
                   >
                        <View style={{backgroundColor:'#999999', height: 60, width:400, alignItems:'center', justifyContent:'center'}}>
                            {isLoading? 
                                <ActivityIndicator size={27} color="#fff"/>
                            :<Text style={{color:'#ffffff', fontSize:15,}}>Get Started</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
               </View>
           </ImageBackground>
        </KeyboardAvoidingView>
        
    )
}