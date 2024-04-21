import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

import { Container} from './styles';

interface ButtonBackPageProps extends TouchableOpacityProps{
}

const ButtonBackPage: React.FC<ButtonBackPageProps> = ({ ...rest} : ButtonBackPageProps) => {
  return (
    <Container {...rest}>
        <Icon name="doubleleft" size={32} />
    </Container>
  )
}

export default ButtonBackPage;