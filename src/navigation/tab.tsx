import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '../types/enums/routes';
import {StackTabParams} from '../types/interfaces/navigation';
import List from '../screens/list';
import AddTask from '../screens/addTask';

const Tab = createBottomTabNavigator<StackTabParams>();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={Routes.LIST} component={List} />
        <Tab.Screen name={Routes.ADD_TASK} component={AddTask} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
