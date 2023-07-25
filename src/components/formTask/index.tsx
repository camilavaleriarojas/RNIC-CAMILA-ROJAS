import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {FormTaskProps} from '../../types/types';
import {Container, Title, Button, Input} from './styles';

const FormTask = ({addTask}: FormTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionUsingRef = useRef<TextInput>(null);

  const onSubmit = () => {
    addTask({
      title: title,
      description: description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <Container>
      <Title>Agregar tarea</Title>
      <Input
        placeholder="Tarea"
        value={title}
        onChangeText={value => setTitle(value)}
        returnKeyType="next"
        onSubmitEditing={() => {
          descriptionUsingRef.current?.focus();
        }}
      />
      <Input
        placeholder="Descripcion"
        value={description}
        onChangeText={value => setDescription(value)}
        // ref={descriptionUsingRef}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Button>Agregar tarea</Button>
      </TouchableOpacity>
    </Container>
  );
};

export default FormTask;
