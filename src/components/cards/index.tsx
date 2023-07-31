import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CardProps} from '../../types';
import {
  Container,
  Div,
  Icons,
  Description,
  State,
  Title,
  Image,
} from './styles';
import Delete from '../../assets/icons/x.svg';
import Edit from '../../assets/icons/edit.svg';
import Check from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';
import {Routes} from '../../types/enums/routes';

const Card = (props: CardProps) => {
  const {data, navigation} = props;
  const {title, description, img} = data;
  const id = data.id;
  const [todo, setTodo] = useState(false);

  return (
    <Container>
      <Div>
        <Title>{title}</Title>
        <Icons>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.EDIT_TASK, {id: id});
            }}>
            <Edit stroke={theme.text} />
          </TouchableOpacity>
          <Delete stroke={theme.text} />
        </Icons>
      </Div>
      <Description>{description}</Description>
      {img && <Image alt={title} source={img} />}
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
