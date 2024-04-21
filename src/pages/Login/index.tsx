import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Container, Content, Label, Image } from "./styles";
import Input from "../../components/Input";
import { LoginUser } from "../../types/LoginUser";
import Button from "../../components/Button";
import Title from "../../components/Title";

const Login: React.FC = () => {
  const formRef: any = useRef(null);
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
          <Button title="Entrar"/>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;