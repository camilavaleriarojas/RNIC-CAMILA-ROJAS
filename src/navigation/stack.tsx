import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../types/enums/routes';
import {StackTabParams} from '../types/interfaces/navigation';
import EditTask from '../screens/editTask';
import ListScreen from '../screens/list';

const Stack = createNativeStackNavigator<StackTabParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.LIST} component={ListScreen} />
      <Stack.Screen name={Routes.EDIT_TASK} component={EditTask} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
