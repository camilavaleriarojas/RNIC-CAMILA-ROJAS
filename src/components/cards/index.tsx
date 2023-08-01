import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CardProps} from '../../types';
import {Container, Div, Description, State, Title, Image} from './styles';
import Check from '../../assets/icons/check.svg';
import {theme} from '../../constants/theme';
import {Routes} from '../../types/enums/routes';

const Card = (props: CardProps) => {
  const {data, navigation} = props;
  const {title, description, img, date} = data;
  const id = data.id;
  const [todo, setTodo] = useState(false);

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
    </TouchableOpacity>
  );
};

export default Card;
