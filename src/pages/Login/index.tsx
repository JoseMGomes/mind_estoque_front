import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Container, Content, Label, Image } from "./styles";
import Input from "../../components/Input";
import { LoginUser } from "../../types/LoginUser";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";

const Login: React.FC = () => {
  const formRef: any = useRef(null);
  const navigation = useNavigation<StackTypes>()
  function handleSubmit(data: LoginUser) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }


  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title title="Seja Bem Vindo !"/>
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email:" />
          <Label>Senha:</Label>
          <Input name="password" placeholder="Digite sua senha:" secureTextEntry />
          <Button title="Entrar" onPress={() => navigation.navigate("Home")}/>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;