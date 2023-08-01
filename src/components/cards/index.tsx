import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CardProps} from '../../types';
import {Container, Div, Description, State, Title, Image} from './styles';
import Check from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';
import {Routes} from '../../types/enums/routes';
import {ContextProvider} from '../../../App';

const Card = (props: CardProps) => {
  const {data, navigation} = props;
  const {title, description, img} = data;
  const [todo, setTodo] = useState(false);
  const {taskList} = useContext(ContextProvider);
  const id = data.id;
  const selectedTask = taskList?.filter(item => item.id === id)[0];
  console.log(selectedTask.todo);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.EDIT_TASK, {id: id});
      }}>
      <Container>
        <Div>
          <Title>{title}</Title>
          <Title>{selectedTask.taskDate ? selectedTask.taskDate : ''}</Title>
        </Div>
        <Description>{description}</Description>
        {img && <Image alt={title} source={img} />}
        <TouchableOpacity onPress={() => setTodo(!todo)}>
          <State>
            {!selectedTask.todo ? (
              <Check stroke={theme.enabled} />
            ) : (
              <Check stroke={theme.disabled} />
            )}
          </State>
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
