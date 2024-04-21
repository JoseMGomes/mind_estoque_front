import styled from 'styled-components/native';
import styles from '../../styles';


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #d52247;
  border-radius: 8px;
  margin-top: 30px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
    color: ${styles.colors.default_label};
`;