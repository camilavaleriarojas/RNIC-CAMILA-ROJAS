import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Delete from '../../assets/icons/x.svg';
import {AddTaskFormProps, FormTaskProps} from '../../types';
import {
  Container,
  Title,
  TextButton,
  Input,
  SubmitButton,
  IconContainer,
  DatePickerTask,
  DatePickerContainer,
  DateText,
} from './styles';
import AddIcon from '../../assets/icons/plus.svg';
import EditIcon from '../../assets/icons/edit.svg';
import DateIcon from '../../assets/icons/calendar.svg';
import {theme} from '../../constants/theme';
import {ContextProvider} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const FormTask = ({id, isEditingTask}: FormTaskProps) => {
  const navigation = useNavigation();
  const {taskList, setTaskList} = useContext(ContextProvider);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date() || undefined);
  const [open, setOpen] = useState(false);
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
      if (selectedTask.date) {
        setDate(selectedTask?.date);
      }
    }
  }, [isEditingTask, selectedTask]);

  const addTask = (task: AddTaskFormProps) => {
    const updatedTaskList = {
      id: taskList.length + 1,
      title: task.title,
      description: task.description,
      date: date,
      todo: false,
    };
    setTaskList([...taskList, updatedTaskList]);
  };

  const onSubmit = () => {
    const newTask = {
      title: title,
      description: description,
      date: date,
    };
    if (isEditingTask) {
      editData(newTask);
    } else {
      addTask(newTask);
      setTitle('');
      setDescription('');
    }
    Keyboard.dismiss();
    navigation.goBack();
  };

  const deleteTask = () => {
    Alert.alert('Eliminar tarea', '¿Quiere eliminar esta tarea?', [
      {
        text: 'No',
        onPress: () => {
          navigation.goBack();
        },
      },
      {
        text: 'Si',
        onPress: () => {
          if (selectedTask) {
            const updatedTaskList = taskList.filter(
              task => task.id !== selectedTask.id,
            );
            setTaskList(updatedTaskList);
            navigation.goBack();
          }
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView>
      <Container>
        <IconContainer>
          <TouchableOpacity onPress={deleteTask}>
            {isEditingTask ? (
              <>
                <Delete stroke={theme.disabled} />
              </>
            ) : null}
          </TouchableOpacity>
        </IconContainer>
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
        <DatePickerContainer>
          <DatePickerTask onPress={() => setOpen(true)}>
            <DateIcon width={24} height={24} stroke={theme.disabled} />
          </DatePickerTask>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(new Date(date));
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <DateText>{date ? date.toDateString() : 'Agregar fecha'}</DateText>
        </DatePickerContainer>
        <SubmitButton onPress={onSubmit}>
          {isEditingTask ? (
            <>
              <TextButton>Editar</TextButton>
              <EditIcon stroke={theme.text} />
            </>
          ) : (
            <>
              <TextButton>Agregar</TextButton>
              <AddIcon stroke={theme.text} />
            </>
          )}
        </SubmitButton>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default FormTask;
