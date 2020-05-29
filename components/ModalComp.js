import  React, {useState, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, Modal,  FlatList} from 'react-native';




export const PersonalDetailsModalContext = createContext();
export const TestingModalContext = createContext();

const PersonalDetailsModal = ()=>{
    return(
    <Modal
    animationType="slide"
    visible={showReport}
    >
       <PersonalDetailsModalContext.Provider value={{showDetails, setshowDetails}}>
         <MakeReport/>
       </PersonalDetailsModalContext.Provider>
    </Modal>
    )
}


const [showTesting, setSshowTesting] = useState(false);
  const TestingModal = ()=>{
   return(
   <Modal
   animationType="slide"
   visible={showReport}
   >
      <TestingModalContext.Provider value={{showReport, setShowReport}}>
        <MakeReport/>
      </TestingModalContext.Provider>
   </Modal>
)
   }