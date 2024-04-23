import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Container, Content, Label, Image } from "./styles";
import Input from "../../components/Input";
import { LoginUser } from "../../types/LoginUser";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";
import { Alert } from "react-native";
import { postSignInUserAsync } from "../services/userService";

const Login: React.FC = () => {
  const formRef: any = useRef(null);
  const navigation = useNavigation<StackTypes>();
  const handleSubmit = async (data: LoginUser) => {
    try {
      const response = await postSignInUserAsync(data);
      console.log(response)
      if (typeof response == "boolean") {
        Alert.alert("Erro", "Verifique sua senha e email");
        return false;
      } 
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert("Erro ao autenticas", "Verifique sua senha e email");
    }
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title title="Seja Bem Vindo !" />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email:" />
          <Label>Senha:</Label>
          <Input
            name="password"
            placeholder="Digite sua senha:"
            secureTextEntry
          />
          <Button
            title="Entrar"
            onPress={() => formRef.current?.submitForm()}
          />
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
