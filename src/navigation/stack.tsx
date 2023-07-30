import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../types/enums/routes';
import {StackTabParams} from '../types/interfaces/navigation';
import TabNavigator from './tab';
import EditTask from '../screens/editTask';

const Stack = createNativeStackNavigator<StackTabParams>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.TAB_NAVIGATOR} component={TabNavigator} />
        <Stack.Screen name={Routes.EDIT_TASK} component={EditTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
