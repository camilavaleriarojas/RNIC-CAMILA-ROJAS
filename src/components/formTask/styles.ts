import {theme} from '../../constants/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  padding: 25px 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fff;
`;

export const Title = styled.TextInput`
  font-size: 20px;
  text-align: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 6px;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #e8e8ed;
  font-size: 18px;
`;

export const Button = styled.Text`
  padding: 12px;
  margin: 10px 30px 0 30px;
  border-radius: 20px;
  font-size: 20px;
  background-color: ${theme.secondary};
  font-family: 'Lato-Regular';
  text-align: center;
  color: #fff;
`;
