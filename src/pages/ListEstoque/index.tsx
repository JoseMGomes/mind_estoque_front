import React from "react";

import { Container } from "./styles";
import Card from "../../components/Card";
import { ItemProps } from "../../types/ItemEstoque";
import { FlatList } from "react-native";
import Title from "../../components/Title";
import ButtonBackPage from "../../components/ButtonBackPage";


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
  ];
  return (
    <Container>
      <Title title="Listagem de estoque" style={{marginBottom: 20}}/>
      <FlatList
        style={{ width: "90%", height: 500 }}
        data={data}
        renderItem={(item: ItemFlatList) => <Card item={item.item} />}
        keyExtractor={(item: ItemProps) => item.name}
      />
      <ButtonBackPage/>
    </Container>
  );
};

export default ListEstoque;