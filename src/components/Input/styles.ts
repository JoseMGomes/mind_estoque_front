import styled from "styled-components/native";
import styles from "../../styles";

export const Container = styled.View`
  padding: 0 15px;
  height: 40px;
  background: ${styles.colors.background_card_default};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${styles.colors.secudary};
  border-bottom-width: 1;
`;

export const InputComponent = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255,255,255,0.3)",
})`
  flex: 1;
  width: 250px;
  color: ${styles.colors.default_label};
`;