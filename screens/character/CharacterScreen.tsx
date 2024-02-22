import {Characters} from '../../components/Characters';
import {FiltersProvider} from '../../contexts/CharacterFilterContext';
import {CharacterDetailScreen} from './CharacterDetailScreen';
import {CharactersFilterInputScreen} from './CharactersFilterInputScreen';
import {CharactersFilterScreen} from './CharactersFilterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const CharacterScreen = () => {
  return (
    <FiltersProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen
          name="Filter"
          component={CharactersFilterScreen}
          options={{
            presentation: 'containedModal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="FilterInput"
          component={CharactersFilterInputScreen}
          options={{
            presentation: 'fullScreenModal',
            animation: 'ios',
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{
            presentation: 'containedModal',
            animation: 'ios',
          }}
        />
      </Stack.Navigator>
    </FiltersProvider>
  );
};
