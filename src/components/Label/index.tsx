import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {  Text } from './styles';
import { Label } from '../../pages/Login/styles';

interface LabelProps extends TouchableOpacityProps{
    title: string;
}

const Button: React.FC<LabelProps> = ({title} : LabelProps) => {
  return (
        <Label>{title}</Label>
  )
}

export default Button;