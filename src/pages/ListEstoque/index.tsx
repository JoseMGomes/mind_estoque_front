import React from "react";

import { Container, ViewButton } from "./styles";
import Card from "../../components/Card";
import { ItemProps } from "../../types/ItemEstoque";
import { FlatList } from "react-native";
import Title from "../../components/Title";
import ButtonBackPage from "../../components/ButtonBackPage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";
import Header from "../../components/Header";


interface ItemFlatList {
  index: number;
  item: ItemProps;
}



 export const ListEstoque: React.FC = () => {
   const data: ItemProps[] = [
    {
      name: "Shorts",
      quant: 25,
      description: "Serve para fazer comida",
      value: "90",
    },
    {
      name: "Camisa",
      quant: 84,
      description: "Camisa masculina",
      value: "80",
    },
    {
      name: "Calca",
      quant: 12,
      description: "Calca pequena a grande",
      value: "120",
    },
    {
      name: "Chinelo",
      quant: 54,
      description: "Do numero 34 ao 43",
      value: "27",
      entrada: true
    },
    {
      name: "Chinelo",
      quant: 54,
      description: "Do numero 34 ao 43",
      value: "27",
      entrada: true
    },
    {
      name: "Chinelo",
      quant: 54,
      description: "Do numero 34 ao 43",
      value: "27",
      entrada: true
    },
  ];

  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Header title="Listagem de estoque" />
      <FlatList
        style={{ width: "90%", height: 500, marginTop: 50}}
        data={data}
        renderItem={(item: ItemFlatList) => <Card item={item.item} />}
        keyExtractor={(item: ItemProps) => item.name}
      />
    </Container>
  );
};

export default ListEstoque;