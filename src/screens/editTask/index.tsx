import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StackTabParams} from '../../types/interfaces/navigation';
import {Routes} from '../../types/enums/routes';
import FormTask from '../../components/formTask';

type EditTaskProps = BottomTabScreenProps<StackTabParams, Routes.EDIT_TASK>;

const EditTask = ({route}: EditTaskProps) => {
  return <FormTask id={route.params?.id} isEditingTask={true} />;
};

export default EditTask;
