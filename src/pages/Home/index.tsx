import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/Title';
import ButtonBackPage from '../../components/ButtonBackPage';
import { Container, Content } from './styles';


const Home: React.FC = () => {

  return (
    <Container>
        <Content>
        <Title title='O que gostaria de fazer?'/>
        <Button title="Cadastro de Usuario" />
        <Button title="Lista de Estoque" />
        <Button title="Adicionar Item"/>
        </Content>
        <ButtonBackPage/>
    </Container>

  );
}

export default Home;