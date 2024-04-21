import styled from 'styled-components/native';
import styles from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
    width: 80%;
`;

export const Label = styled.Text`
    color: ${styles.colors.default_label };
    margin-top: 20px;
    margin-bottom: 5px;
    max-width: 200px;
`;

export const Image = styled.Image``;