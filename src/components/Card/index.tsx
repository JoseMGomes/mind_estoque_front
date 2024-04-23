import React, { useEffect, useState } from "react";
import { Container, Content, ImageItem } from "./styles";
import { Label } from "../Label/styles";
import { Text, View } from "react-native";
import { ItemProps } from "../../types/ItemEstoque";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "../../styles";
import api from "../../factory/api";
import baseUrl from "../../config/baseUrl";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";

interface EstoqueListProps {
  item: ItemProps;
}

const Card: React.FC<EstoqueListProps> = ({ item }: EstoqueListProps) => {
  const urlImage = `${baseUrl.URL}/image/${item.image_path}`;
  const navigation = useNavigation<StackTypes>();

  const navigationScreen = () => {
    navigation.navigate("FormItem", item);
  };

  return (
    <Container onPress={navigationScreen}>
      <Content>
        {item.image_path ? (
          <ImageItem source={{ uri: urlImage }} />
        ) : (
          <ImageItem source={require("../../../assets/7528903.png")} />
        )}
        <View>
          <Text
            style={{
              color: styles.colors.default_label,
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: styles.colors.default_label,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            Quantidade:{item.quant}
          </Text>
          <Text style={{ color: styles.colors.default_label, marginBottom: 4 }}>
            {item.description}
          </Text>
          <Text
            style={{
              color: styles.colors.default_label,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
          </Text>
        </View>
      </Content>
      <Text style={{ marginRight: 20, color: styles.colors.default_label }}>
        {item.is_stock_entry ? (
          <Icon name="arrowup" size={25} color={styles.colors.enter} />
        ) : (
          <Icon name="arrowdown" size={25} color={styles.colors.exit} />
        )}
      </Text>
    </Container>
  );
};

export default Card;
