import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CardProps} from '../../types/types';
import {Container, Div, Icons, Description, State, Title} from './styles';
import Delete from '../../assets/icons/x.svg';
import Edit from '../../assets/icons/edit.svg';
import Check from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';

const Card = (props: CardProps) => {
  const {data} = props;
  const {title, description} = data;

  const [todo, setTodo] = useState(false);

  return (
    <Container>
      <Div>
        <Title>{title}</Title>
        <Icons>
          <Edit stroke={theme.text} />
          <Delete stroke={theme.text} />
        </Icons>
      </Div>
      <Description>{description}</Description>
      <TouchableOpacity onPress={() => setTodo(!todo)}>
        <State>
          {!todo ? (
            <Check stroke={theme.disabled} />
          ) : (
            <Check stroke={theme.enabled} />
          )}
        </State>
      </TouchableOpacity>
    </Container>
  );
};

export default Card;
