import styled from "styled-components/native";
import styles from "../../styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  background-color: ${styles.colors.background};
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;


export const Content = styled.View`
  width: 80%;
  margin-top: 50px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-color: ${styles.colors.background_card_default};
  border-width: 5px;
  align-self: center;
  border-radius: 10px;
`;

export const Picker = styled.View`
  margin-top: 10px;
`;

export const Select = styled(DropDownPicker)`
  border: none;
  background: ${styles.colors.background_card_default};
  color: white;
  border-bottom-color: ${styles.colors.secudary};
  border-bottom-width: 1px;
  margin-bottom: 60px;
`;

export const Choose = styled.View`
  justify-content: space-between;
`;

export const NewButton = styled(Button)`
  margin-top: 10px;
`;
