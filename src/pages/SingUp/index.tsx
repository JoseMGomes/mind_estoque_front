import React, { useRef } from "react";
import { Container, Content } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Label } from "../Login/styles";
import { Form } from "@unform/mobile";
import { RegisterUser } from "../../types/RegisterUser";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";
import Header from "../../components/Header";
import { postRegistereUserAsync } from "../services/userService";
import { Alert } from "react-native";

interface RegisterUserData extends RegisterUser {
  passwordConfirm: string;
}

const SingUp: React.FC = () => {
  const formRef: any = useRef(null);
  const navigation = useNavigation<StackTypes>();

  async function handleSubmit(data: RegisterUserData) {
    try {
      if (data.password != data.passwordConfirm) {
        Alert.alert("Erro", "Sua senha não é igual a confirmação");
        return false;
      }

      const result = await postRegistereUserAsync(data);
      if (result) {
        Alert.alert("Sucesso", "Cadastrado com sucesso");
        navigation.navigate("Home");
      }
    } catch (err) {
      return false;
    }
  }

  return (
    <Container>
      <Header title="Cadastro de usuarios" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>Nome:</Label>
          <Input name="name" placeholder="Digite seu nome:" />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email:" />
          <Label>Senha:</Label>
          <Input
            name="password"
            secureTextEntry
            placeholder="Digite sua senha:"
          />
          <Label>Confirmar Senha:</Label>
          <Input
            name="passwordConfirm"
            secureTextEntry
            placeholder="Confirmar sua senha:"
          />
          <Button
            onPress={() => formRef.current?.submitForm()}
            title="Criar Usuario"
          />
        </Form>
      </Content>
    </Container>
  );
};

export default SingUp;
