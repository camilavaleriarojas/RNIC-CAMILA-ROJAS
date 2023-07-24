import React, {useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AddTask, FormTaskProps} from '../../types/types';
import styles from './styles';

const FormTask = ({addTask}: FormTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionUsingRef = useRef<TextInput>(null);

  const onSubmit = () => {
    addTask({
      title: title,
      description: description,
    });
    setTitle('')
    setDescription('')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar tarea</Text>
      <TextInput
        placeholder="Tarea"
        style={styles.input}
        value={title}
        onChangeText={value => setTitle(value)}
        returnKeyType="next"
        onSubmitEditing={() => {
          descriptionUsingRef.current?.focus();
        }}
      />
      <TextInput
        placeholder="Descripcion"
        style={styles.input}
        value={description}
        onChangeText={value => setDescription(value)}
        ref={descriptionUsingRef}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.button}>Agregar tarea</Text>
      </TouchableOpacity>
    </View>
  );
};


export default FormTask;
