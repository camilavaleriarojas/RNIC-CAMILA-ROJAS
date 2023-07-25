import {theme} from '../../constants/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  font-size: 15px;
  background-color: ${theme.secondary};
  border-radius: 15px;
  min-width: 200px;
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
  gap: 10px;
`;

export const Description = styled.Text`
  margin: 0 0 5px 10px;
  padding-left: 10px;
  font-size: 17px;
  font-family: 'Lato-Regular';
  color: ${theme.text};
`;

export const State = styled.Text`
  margin-right: 10px;
  padding: 5px;
  display: flex;
  align-self: flex-end;
`;

export const Title = styled.Text`
  margin: 8px 15px;
  padding: 5px;
  font-weight: 400;
  font-size: 17px;
  font-family: 'Lato-Bold';
  color: ${theme.text};
`;

export const Image = styled.Image`
  width: 92%;
  height: 70px;
  margin: 15px 0;
  border-radius: 15px;
  align-self: center;
`;
