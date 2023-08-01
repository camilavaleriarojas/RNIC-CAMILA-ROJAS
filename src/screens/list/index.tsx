import React, {useContext} from 'react';
import {Routes} from '../../types/enums/routes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackTabParams} from '../../types/interfaces/navigation';
import List from '../../components/list';
import {ContextProvider} from '../../../App';

type ListTaskProps = BottomTabScreenProps<StackTabParams, Routes.LIST>;

const ListScreen = ({navigation}: ListTaskProps) => {
  const {taskList} = useContext(ContextProvider);

  return <List taskList={taskList} navigation={navigation} />;
};

export default ListScreen;
