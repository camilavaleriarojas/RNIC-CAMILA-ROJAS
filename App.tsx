/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useEffect, useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';
import {tasks} from './src/constants/task';
import Header from './src/components/header';
import {TaskTypes} from './src/types';
import {Main, Component} from './styles';
import RNBootSplash from 'react-native-bootsplash';
import Navigator from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from './src/types/enums/routes';

interface ContextType {
  taskList: TaskTypes[];
  setTaskList: (data: TaskTypes[]) => void;
}

export const ContextProvider = createContext<ContextType>({
  taskList: tasks,
  setTaskList: () => undefined,
});

function App(): JSX.Element {
  const [taskList, setTaskList] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const Values = {
    taskList,
    setTaskList,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTaskList = await AsyncStorage.getItem(Keys.TASKS_KEY);
        if (storedTaskList) {
          setTaskList(JSON.parse(storedTaskList));
        }
        RNBootSplash.hide({fade: true});
      } catch (error) {
        console.log('Error fetching data from AsyncStorage:', error);
        RNBootSplash.hide({fade: true});
      }
    };
    fetchData();
  }, []);

  return (
    <ContextProvider.Provider value={Values}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Component>
            <StatusBar
              barStyle={isAndroid ? 'dark-content' : 'light-content'}
              backgroundColor={isAndroid ? 'white' : 'black'}
            />
            <Header />
            <Navigator />
          </Component>
        </Main>
      </TouchableWithoutFeedback>
    </ContextProvider.Provider>
  );
}

export default App;
