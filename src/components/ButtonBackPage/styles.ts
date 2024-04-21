import styled from 'styled-components/native';
import styles from '../../styles';

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: 50px; 
  left: 2px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 30px;
  background-color: ${styles.colors.button_exit};
`;