import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../types/enums/routes';
import {StackTabParams} from '../types/interfaces/navigation';
import AddTask from '../screens/addTask';
import StackNavigator from './stack';
import AddIcon from '../assets/icons/plus.svg';
import ListIcon from '../assets/icons/list.svg';
import {theme} from '../constants/theme';

const Tab = createBottomTabNavigator<StackTabParams>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          if (route.name === Routes.STACK) {
            return (
              <ListIcon stroke={!focused ? theme.disabled : theme.enabled} />
            );
          }
          if (route.name === Routes.ADD_TASK) {
            return (
              <AddIcon stroke={!focused ? theme.disabled : theme.enabled} />
            );
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen name={Routes.STACK} component={StackNavigator} />
      <Tab.Screen name={Routes.ADD_TASK} component={AddTask} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
