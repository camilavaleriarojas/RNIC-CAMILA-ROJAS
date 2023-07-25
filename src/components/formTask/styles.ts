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

export const TextButton = styled.Text`
  font-size: 20px;
  padding-right: 10px;
  font-family: 'Lato-Regular';
  text-align: center;
  color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  background-color: ${theme.secondary};
  padding: 12px;
  margin: 10px 40px 0 40px;
  border-radius: 20px;
`;
