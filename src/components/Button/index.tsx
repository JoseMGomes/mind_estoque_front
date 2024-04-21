import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest} : ButtonProps) => {
  return (
    <Container {...rest}>
        <Text>{title}</Text>
    </Container>
  )
}

export default Button;