import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Vitals from '../screens/Vitals';
import Settings from '../screens/Settings';
import Report from '../screens/Report';
import Dev from '../screens/Dev'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home"/>,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-paper-plane" />,
        }}
      />
      <BottomTab.Screen
        name="Vitals"
        component={Vitals}
        options={{
          title: 'Vitals',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-medkit" />,
        }}
      />
       <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
      <BottomTab.Screen
        name="Dev"
        component={Dev}
        options={{
          title: 'Dev',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Report':
      return 'Report';
    case 'Vitals':
      return 'Vitals';
    case 'Settings':
      return 'Settings';
    case 'Dev':
      return 'Dev';  
  }
}
