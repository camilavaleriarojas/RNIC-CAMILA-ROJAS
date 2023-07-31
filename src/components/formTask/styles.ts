import {theme} from '../../constants/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  height: 340px;
  margin: 15px 30px 0 30px;
  border-radius: 40px;
  background-color: #fff;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  padding-right: 20px;
`;

export const Title = styled.TextInput`
  font-size: 23px;
  text-align: center;
`;

export const Input = styled.TextInput`
  margin: 5px;
  padding-left: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #e8e8ed;
  font-size: 20px;
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
  justify-content: center;
  background-color: ${theme.secondary};
  padding: 12px;
  margin: 15px 40px 0 40px;
  border-radius: 20px;
`;

export const DatePickerTask = styled.TouchableOpacity`
  padding: 15px 0 0 25px;
`;

export const DatePickerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateText = styled.TextInput`
  padding-right: 25px;
  font-family: 'Lato-Regular';
  color: ${theme.primary};
`;
