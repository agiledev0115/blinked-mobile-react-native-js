import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {colors} from '../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Home from '../ui/screens/Home';
import User from '../ui/screens/User';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.PURPLE,
        tabBarInactiveTintColor: colors.DARKGRAY,
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.OPTION}
        component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="options" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.HISTORY}
        component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="clock-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.USER}
        component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="user" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={routes.PROFILETAB}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
