/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  AppState,
  StatusBar,
} from 'react-native';
import Card from './src/components/cards';
import {tasks} from './src/constants/task';
import Header from './src/components/header';
import FormTask from './src/components/formTask';
import {AddTask, TaskTypes} from './src/types';
import {Main, Component} from './styles';
import RNBootSplash from 'react-native-bootsplash';

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

  const emptyData = <Text>No existen tareas a realizar</Text>;
  const [taskList, setTaskList] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const Values = {
    taskList,
    setTaskList,
  };

  const addTask = (task: AddTask) => {
    const updatedTaskList = {
      id: taskList.length + 1,
      title: task.title,
      description: task.description,
      todo: false,
    };
    setTaskList([...taskList, updatedTaskList]);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        return setTaskList([]);
      }
    });
    return () => {
      subscription.remove();
    };
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
            <FlatList
              data={taskList}
              renderItem={({item}) => <Card data={item} />}
              ListEmptyComponent={emptyData}
            />
            <FormTask addTask={addTask} />
          </Component>
        </Main>
      </TouchableWithoutFeedback>
    </ContextProvider.Provider>
  );
}

export default App;
