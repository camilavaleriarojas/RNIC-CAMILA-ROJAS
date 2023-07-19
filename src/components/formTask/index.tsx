import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FormTaskProps} from '../../types/types';

const FormTask = (props: FormTaskProps) => {
  const {data, addTask} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    addTask({
      id: data.length + 1,
      title: title,
      description: description,
      todo: false,
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
        // returnKeyType="next"
      />
      <TextInput
        placeholder="Descripcion"
        style={styles.input}
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.button}>Agregar tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: 300,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'coral',
    padding: 10,
    color: '#fff'
  },
});

export default FormTask;
