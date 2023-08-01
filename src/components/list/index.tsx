import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import Card from '../cards';
import {TaskTypes} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from '../../types/enums/routes';

export interface ListProps {
  taskList: TaskTypes[];
  navigation: any;
}

const List = ({taskList, navigation}: ListProps) => {
  const emptyData = <Text>No existen tareas a realizar</Text>;

  useEffect(() => {
    AsyncStorage.setItem(Keys.TASKS_KEY, JSON.stringify(taskList));
  }, [taskList]);

  return (
    <FlatList
      data={taskList}
      renderItem={({item}) => <Card data={item} navigation={navigation} />}
      ListEmptyComponent={emptyData}
    />
  );
};

export default List;
