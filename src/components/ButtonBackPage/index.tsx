import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

import { Container} from './styles';
import styles from '../../styles';

interface ButtonBackPageProps extends TouchableOpacityProps{
}

const ButtonBackPage: React.FC<ButtonBackPageProps> = ({ ...rest} : ButtonBackPageProps) => {
  return (
    <Container {...rest}>
        <Icon name="doubleleft" size={25} color={styles.colors.default_label}/>
    </Container>
  )
}

export default ButtonBackPage;