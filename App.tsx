/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  AppState,
  StatusBar,
} from 'react-native';
import Card from './src/components/cards';
import {tasks} from './src/constants/task';
import Header from './src/components/header';
import FormTask from './src/components/formTask';
import {TaskTypes} from './src/types/types';
import styles from './styles';

function App(): JSX.Element {
  const emptyData = <Text>No existen tareas a realizar</Text>;
  const [taskList, setTaskList] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const addTask = (task: TaskTypes) => {
    const updatedTaskList = [...taskList, task];
    setTaskList(updatedTaskList);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <SafeAreaView style={styles.safeArea}>
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
          <FormTask data={taskList} addTask={addTask} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default App;
