import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {


  const listData=[
    { id: "1", image: require('../assets/images/virus.jpg'), title:'Confirmed Cases' },
    { id: "2", image: require('../assets/images/sanitizer.jpg'), title:'Recovered' },
    { id: "3", image: require('../assets/images/reaper.jpg'), title:'Deaths' },
  ]


  const DataList= ({image, title})=>{
    return(
      <View style={{borderRadius:50,}}>
        <ImageBackground source={image} style={{width:200, height:120,borderRadius:50, resizeMode:'contain', marginTop:20, marginRight:15, alignItems:'flex-end', marginLeft:15}}>
          <Text style={{color:'#ffffff', margin:10}}>20</Text>
          <Text style={{color:'#ffffff', margin:5}}> {title} </Text>
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
        renderItem={ ({item})=> <DataList image={item.image} title={item.title}/>}
        keyExtractor={ item=> item.id}
        />
      </View>
      <View style={{flex:.2, margin:15}}>
        <Text style={{fontWeight:'bold'}}>Ghana's Situation Update</Text>
        <Text>Last Update:12/34/54</Text>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={{flex:.1, alignItems:'center'}}>
          <Text style={{fontWeight:'bold'}}>Confirmed Cases as at in Ghana as at 12/3/5/</Text>
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

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
