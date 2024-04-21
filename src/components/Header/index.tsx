import React from 'react';
import { View } from 'react-native';
import Title from '../Title';
import ButtonBackPage from '../ButtonBackPage';
import { Container } from './styles';
import { StackTypes } from '../../routes/Stack';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (
    {title}
) => {
    const navigation = useNavigation<StackTypes>();
  return (
    <Container>
        <ButtonBackPage onPress={()=> navigation.goBack()}/>
        <Title title={title}/>
    </Container>
  );
}

export default Header;