import React from 'react';
import { TextProps} from 'react-native';

import {Text } from './styles';

interface TitleProps extends TextProps{
    title: string;
}

const Title: React.FC<TitleProps> = ({title, ...rest} : TitleProps) => {
  return (
        <Text {...rest}>{title}</Text>
  )
}

export default Title;