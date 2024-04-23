import React from 'react';
import { Container, Content  } from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import Title from '../../components/Title';
import ButtonBackPage from '../../components/ButtonBackPage';
import Header from '../../components/Header';


const Home: React.FC = () => {

  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
        <Content>
        <Title title='O que gostaria de fazer?'/>
        <Button title="Cadastro de Usuario" onPress={() => navigation.navigate("SingUp")}/>
        <Button title="Lista de Estoque" onPress={() => navigation.navigate("ListEstoque")}/>
        <Button title="Adicionar Item" onPress={() => navigation.navigate("FormItem")}/>
        </Content>
    </Container>

  );
}

export default Home;