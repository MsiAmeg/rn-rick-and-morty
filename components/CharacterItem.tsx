import {colors} from '../constants/colors';
import {Character} from '../types/gql';

import styled from 'styled-components/native';

export const CharacterItem = ({name, image, status}: Partial<Character>) => {
  return (
    <CharacterCard>
      <CharacterImage resizeMode="cover" source={{uri: image ?? ''}} />
      <CharacterInfoContainer>
        <CharacterStatus>{status}</CharacterStatus>
        <CharacterName>{name}</CharacterName>
      </CharacterInfoContainer>
    </CharacterCard>
  );
};

const CharacterCard = styled.View`
  flex: 1;
  width: 100%;
  max-height: 220px;
  border-color: #efeff4;
  border-width: 1px;
  border-radius: 8px;
  overflow: hidden;
`;

const CharacterImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;
const CharacterInfoContainer = styled.View`
  height: 100%;
  max-height: 80px;
  padding: 12px;
`;
const CharacterName = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: left;
  color: ${colors.basic.black};
`;
const CharacterStatus = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  text-align: left;
  color: ${colors.basic.additional};
`;
