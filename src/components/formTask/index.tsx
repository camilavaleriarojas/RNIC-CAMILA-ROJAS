import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {FormTaskProps} from '../../types/types';
import {Container, Title, TextButton, Input, SubmitButton} from './styles';
import Add from '../../assets/icons/plus.svg';
import {theme} from '../../constants/theme';

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
        <TextButton>Agregar tarea</TextButton>
        <Add stroke={theme.text} />
      </SubmitButton>
    </Container>
  );
};

export default FormTask;
