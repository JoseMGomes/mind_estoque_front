import React, { useEffect, useState } from "react";

import { Container, ViewButton } from "./styles";
import Card from "../../components/Card";
import { ItemProps } from "../../types/ItemEstoque";
import { FlatList } from "react-native";
import Title from "../../components/Title";
import ButtonBackPage from "../../components/ButtonBackPage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";
import Header from "../../components/Header";
import { getAllItensAsync } from "../services/stockService";

interface ItemFlatList {
  index: number;
  item: ItemProps;
}

export const ListEstoque: React.FC = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const navigation = useNavigation<StackTypes>();
  const teste = [
    {
      createdAt: "2024-04-22T18:46:40.000Z",
      description: "teste@teste.com",
      id: 1,
      image_path: null,
      is_active: true,
      is_stock_entry: true,
      name: "teste",
      quant: 1,
      updatedAt: "2024-04-22T18:46:40.000Z",
      value: "3",
    },
  ];
  const getAllStock = async () => {
    try {
      const response = await getAllItensAsync();
      if (response) {
        setData(response);
      }
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    getAllStock();
  }, []);

  return (
    <Container>
      <Header title="Listagem de estoque" />
      <FlatList
        style={{ width: "90%", height: 500, marginTop: 50 }}
        data={data}
        renderItem={(item: ItemFlatList) => <Card item={item.item} />}
        keyExtractor={(item: ItemProps) => item.id}
      />
    </Container>
  );
};

export default ListEstoque;
