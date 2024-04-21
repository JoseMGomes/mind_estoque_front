import styled from "styled-components/native";
import styles from "../../styles";

export const Container = styled.TouchableOpacity`
 width: 100%;
  min-height: 100px;
  border-radius: 10px;
  flex-direction: row;
  border: 1px solid #fff;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${styles.colors
  .background_card_default};
`;

export const Content = styled.View`
  flex-direction: row;
  width: 200px;
  margin-top: 10px;
  padding: 10px;
`;


export const ImageItem = styled.Image`
   width: 100px;
   height: 100px;
   border-radius: 5px;
   margin-right: 10px;
`;