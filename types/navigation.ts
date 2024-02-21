import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FilterCharacter} from './gql';

export type StackParamList = {
  Characters: FilterCharacter;
  Filter: undefined;
};

export type CharactersScreenProps = NativeStackScreenProps<
  StackParamList,
  'Characters'
>;
export type FilterScreenProps = NativeStackScreenProps<
  StackParamList,
  'Filter'
>;