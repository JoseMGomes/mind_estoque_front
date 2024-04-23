import { AxiosResponse } from "axios";
import api from "../../factory/api";
import { Alert } from "react-native";
import { LoginUser } from "../../types/LoginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegisterUser } from "../../types/RegisterUser";

export interface ResponseRegisterUser extends AxiosResponse {
  data: {
    data: RegisterUser;
  };
}

export interface ResponseSignInProps extends AxiosResponse {
  data: TokenResponse;
}

export async function postSignInUserAsync(user: LoginUser) {
  try {
    const { data }: ResponseSignInProps = await api.post("/sessions", user);
    if (data) {
      AsyncStorage.setItem("userStorageAsync", JSON.stringify(data.user));
      AsyncStorage.setItem("TokenStorageAsync", data.token);
    }
    return data;
  } catch (err: any) {
    Alert.alert("Ops aconteceu um erro", err.response.error);
    return false;
  }
}

export async function postRegistereUserAsync(user: RegisterUser) {
    try {
      const { data }: ResponseRegisterUser = await api.post("/users", user);
  
      return data;
    } catch (err: any) {
      Alert.alert("Ops aconteceu um erro", err.response.error);
      return false;
    }
  }