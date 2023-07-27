import {theme} from './src/constants/theme';
import styled from 'styled-components/native';

export const Main = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Component = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.primary};
`;
