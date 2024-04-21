import React, { useRef } from 'react';
import { Container, Content } from "./styles";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Label } from '../Login/styles';
import { Form } from '@unform/mobile';
import Title from '../../components/Title';
import { RegisterUser } from '../../types/RegisterUser';
import ButtonBackPage from '../../components/ButtonBackPage';



const SingUp : React.FC = () => {
  const formRef: any = useRef(null);
  function handleSubmit(data: RegisterUser) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Title title='Cadastro de Usuario'/>
        <Form ref={formRef} onSubmit={handleSubmit}> 
          <Label>Nome:</Label>
          <Input name="Nome:" placeholder='Digite seu nome:'/>
          <Label>Email:</Label>
          <Input name="Email:" placeholder='Digite seu email:'/>
          <Label>Senha:</Label>
          <Input name="Senha:" secureTextEntry placeholder='Digite sua senha:'/>
          <Label>Confirmar Senha:</Label>
          <Input name="Confirmar Senha:" secureTextEntry placeholder='Confirmar sua senha:'/>
      <Button onPress={() => formRef.current?.submitForm()} title="Criar Usuario" />
        </Form>
      </Content>
      <ButtonBackPage/>
    </Container>
  );
}

export default SingUp;