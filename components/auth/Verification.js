import React, { useState, useContext } from "react";
import {ActivityIndicator, View, Text, ImageBackground, } from 'react-native';
import { TouchableHighlight, TextInput, TouchableOpacity, } from "react-native-gesture-handler";

import {VerificationContext} from '../../App'


export default function Verification({navigation, route}){

    const {contact} = route.params
    const [ code, setCode] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const {isLoggedIn, setIsLoggedIn, loginHandler} = useContext(VerificationContext);

    const handlePress = ()=>{
        setIsLoading(!isLoading);
        console.log(parseInt(code))
      code ===1234 ? setIsLoggedIn(!isLoggedIn) : alert('Code is invalid');
    }

    return(
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
               <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                   <View>
                       <Text style={{fontWeight:'bold', fontSize:20}}>Verification Pin</Text>
                   </View>
                   <View style={{alignItems:'center'}}>
                       <Text style={{fontSize:15}}>Enter the verification code </Text>
                       <Text style={{fontSize:15}}>we sent on the number</Text>
                       <Text style={{fontSize:15}}>{contact}</Text>
                   </View>
               </View>
               <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
                <TextInput
                    style={{ height: 60, width:400, backgroundColor: '#ffffff', borderWidth:.2, marginTop:10, 
                    marginLeft:20, marginRight:20, }}
                    keyboardType='number-pad'
                    placeholder= 'Code'
                    onChangeText={text => setCode(text)}
                    value={code}
                    />
                    <View style={{flex:.9, alignItems:'center', marginTop:40 }}>
                    <TouchableOpacity
                    onPress={handlePress}
                    >
                        <View style={{backgroundColor:'#000000', height: 60, width:400, alignItems:'center', justifyContent:'center'}}>
                            {isLoading? 
                                <ActivityIndicator size={27} color="#fff"/>
                                :<Text style={{color:'#ffffff', fontSize:15,}}>Verify</Text>}
                            </View>
                    </TouchableOpacity>
                    </View>
                    <View style={{flex:.8, alignItems:'center', fontSize:15}}>
                        <Text>Have not recieved your code?</Text>
                        <TouchableOpacity
                        onPress={ ()=> alert('Code has been sent')}
                        >
                            <Text>Resend Code</Text>
                        </TouchableOpacity>
                    </View>
               </View>
        </View>
    )
}