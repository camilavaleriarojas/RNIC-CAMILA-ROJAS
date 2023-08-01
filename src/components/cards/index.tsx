import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {CardProps} from '../../types';
import {Container, Div, Description, State, Title, Image} from './styles';
import Check from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';
import {Routes} from '../../types/enums/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = (props: CardProps) => {
  const {data, navigation} = props;
  const {title, description, img, date} = data;
  const id = data.id;

  const [todo, setTodo] = useState(false);

  useEffect(() => {
    async function loadTodoState() {
      try {
        const todoState = await AsyncStorage.getItem(`${id}`);
        if (todoState !== null) {
          setTodo(JSON.parse(todoState));
        }
      } catch (e) {
        console.log('Error loading todo state:', e);
      }
    }

    loadTodoState();
  }, [id]);

  const handleToggleTodo = async () => {
    try {
      setTodo(prevTodo => !prevTodo);
      await AsyncStorage.setItem(`TODO_STATE_${id}`, JSON.stringify(!todo));
    } catch (e) {
      console.log('Error saving todo state:', e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.EDIT_TASK, {id: id});
      }}>
      <Container>
        <Div>
          <Title>{title}</Title>
          <Title>{date?.toDateString()}</Title>
        </Div>
        <Description>{description}</Description>
        {img && <Image alt={title} source={img} />}
        <TouchableOpacity onPress={handleToggleTodo}>
          <State>
            {!todo ? (
              <Check stroke={theme.disabled} />
            ) : (
              <Check stroke={theme.enabled} />
            )}
          </State>
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
