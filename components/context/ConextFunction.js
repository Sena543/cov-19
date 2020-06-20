import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  FlatList} from 'react-native';




export const CompnentModalContext = createContext();

//takes a component as an argument
export default function GeneralComponentModal({Component}){

   const [showModal, setshowModal]= useState(false);

    return(
    <Modal
    animationType="slide"
    visible={showReport}
    >
       <CompnentModalContext.Provider value={{showModal, setshowModal}}>
         {Component}
       </CompnentModalContext.Provider>
    </Modal>
    )
}