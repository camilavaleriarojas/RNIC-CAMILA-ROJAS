import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from '../types/enums/routes';

const Navigator = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          Keys.PERSISTENCE_KEY,
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(Keys.PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
