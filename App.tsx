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

interface ContextType {
  taskList: TaskTypes[];
  setTaskList: (data: TaskTypes[]) => void;
}

export const ContextProvider = createContext<ContextType>({
  taskList: tasks,
  setTaskList: () => undefined,
});

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  });

  const [taskList, setTaskList] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const Values = {
    taskList,
    setTaskList,
  };

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
