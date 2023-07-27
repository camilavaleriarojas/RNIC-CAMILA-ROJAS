import styled from 'styled-components/native';
import {theme} from '../../constants/theme';

export const Container = styled.View`
  height: 80px;
  padding-top: 25px;
  background-color: ${theme.primary};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${theme.text};
`;
