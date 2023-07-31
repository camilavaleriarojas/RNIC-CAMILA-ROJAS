import React from 'react';
import {FlatList, Text} from 'react-native';
import Card from '../cards';
import {TaskTypes} from '../../types';

export interface ListProps {
  taskList: TaskTypes[];
  navigation: any;
}

const List = ({taskList, navigation}: ListProps) => {
  const emptyData = <Text>No existen tareas a realizar</Text>;

  return (
    <FlatList
      data={taskList}
      renderItem={({item}) => <Card data={item} navigation={navigation} />}
      ListEmptyComponent={emptyData}
    />
  );
};

export default List;
