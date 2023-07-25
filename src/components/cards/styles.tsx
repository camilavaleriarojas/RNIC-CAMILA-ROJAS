import {theme} from '../../constants/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 15px;
  padding: 5px;
  font-size: 17px;
  background-color: ${theme.secondary};
  border-radius: 15px;
`;

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Description = styled.Text`
  margin: 8px;
  padding: 5px;
  font-size: 17px;
  font-family: 'Lato-Regular';
  color: ${theme.text};
`;

export const State = styled.Text`
  margin: 0 10px;
  display: flex;
  align-self: flex-end;
`;

export const Title = styled.Text`
  margin: 8px;
  padding: 5px;
  font-weight: 400;
  font-size: 17px;
  font-family: 'Lato-Bold';
  color: ${theme.text};
`;
