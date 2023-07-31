import React, {useContext, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {AddTaskFormProps, FormTaskProps} from '../../types';
import {Container, Title, TextButton, Input, SubmitButton} from './styles';
import Add from '../../assets/icons/plus.svg';
import {theme} from '../../constants/theme';
import {ContextProvider} from '../../../App';
import {useNavigation} from '@react-navigation/native';

// type EditTaskProps = BottomTabScreenProps<StackTabParams, Routes.EDIT_TASK>;
// type AddTaskProps = BottomTabScreenProps<StackTabParams, Routes.ADD_TASK>;

const FormTask = ({id, isEditingTask}: FormTaskProps) => {
  const navigation = useNavigation();
  const {taskList, setTaskList} = useContext(ContextProvider);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionUsingRef = useRef<TextInput>(null);
  const selectedTask = taskList?.filter(item => item.id === id)[0];

  const editData = (data: AddTaskFormProps) => {
    const updatedTask = taskList.map(task => {
      if (selectedTask?.id === task.id) {
        return {...task, ...data};
      } else {
        return task;
      }
    });
    setTaskList(updatedTask);
  };

  useEffect(() => {
    if (isEditingTask && selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }
  }, [isEditingTask, selectedTask]);

  const addTask = (task: AddTaskFormProps) => {
    const updatedTaskList = {
      id: taskList.length + 1,
      title: task.title,
      description: task.description,
      todo: false,
    };
    setTaskList([...taskList, updatedTaskList]);
  };

  const onSubmit = () => {
    const newTask = {
      title: title,
      description: description,
    };
    if (isEditingTask) {
      editData(newTask);
      setTitle('');
      setDescription('');
    } else {
      addTask(newTask);
    }
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <Container>
      <Title>{isEditingTask ? 'Editar tarea' : 'Agregar tarea'}</Title>
      <Input
        placeholder="Tarea"
        value={title}
        onChangeText={setTitle}
        returnKeyType="next"
        onSubmitEditing={() => {
          descriptionUsingRef.current?.focus();
        }}
      />
      <Input
        placeholder="Descripcion"
        value={description}
        onChangeText={setDescription}
        ref={descriptionUsingRef}
      />
      <SubmitButton onPress={onSubmit}>
        <TextButton>{isEditingTask ? 'Editar' : 'Agregar'}</TextButton>
        <Add stroke={theme.text} />
      </SubmitButton>
    </Container>
  );
};

export default FormTask;
