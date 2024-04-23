import { AxiosResponse } from "axios";
import api from "../../factory/api";
import { Alert } from "react-native";
import { ItemProps } from "../../types/ItemEstoque";
import { RegisterItemProps } from "../../types/RegisterItem";

export interface RegisterItemPropsResponse extends AxiosResponse {
  data: ItemProps;
}

export interface ResponseSignInProps extends AxiosResponse {
  data: ItemProps[];
}

export async function getAllItensAsync() {
  try {
    const { data }: ResponseSignInProps = await api.get("/stock");

    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function patchAddItemAsync(stockId: string) {
  try {
    const { data }: RegisterItemPropsResponse = await api.patch(
      `/stock/add_item/${stockId}`
    );

    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function patchRemoveItemAsync(stockId: string) {
  try {
    const { data }: RegisterItemPropsResponse = await api.patch(
      `/stock/remove_item/${stockId}`
    );

    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function postCreateItemAsync(product: RegisterItemProps) {
  try {
    const { data }: RegisterItemPropsResponse = await api.post(
      "/stock",
      product
    );

    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function putUpdateItemAsync(
  product: RegisterItemProps,
  stockId: string
) {
  try {
    const { data }: RegisterItemPropsResponse = await api.put(
      `/stock/${stockId}`,
      product
    );

    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function postCreateImageAsync(bodyImage: any, stockId: string) {
  try {
    const { data }: any = await api.post(`/upload/${stockId}`, bodyImage, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (err: any) {
    console.log(err.response);
    Alert.alert("Ops aconteceu um erro", JSON.stringify(err.response));
    return false;
  }
}
