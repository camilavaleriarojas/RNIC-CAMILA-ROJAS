/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Card from './src/components/cards';
import { tasks } from './src/constants/task';
import Header from './src/components/header';
import FormTask from './src/components/formTask';
import { TaskTypes } from './src/types/types';

function App(): JSX.Element {

  const emptyData = <Text>No existen tareas a realizar</Text>
  const [taskList, setTaskList] = useState(tasks)

  const addTask = (task: TaskTypes) => {
    const updatedTaskList = [...taskList, task]
    setTaskList(updatedTaskList)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.safeArea} >
        <Header/>
        <FlatList 
        data={taskList}
        renderItem={({item}) => <Card data={item}/>}
        ListEmptyComponent={emptyData}
        />
        <FormTask data={taskList} addTask={addTask} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
      flex: 1
  }
})


export default App;
