import React, { useRef, useState } from "react";
import {
  Choose,
  Container,
  Content,
  Image,
  NewButton,
  Picker,
  Select,

} from "./styles"; // Importe o componente View
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Label } from "../Login/styles";
import { Form } from "@unform/mobile";
import Title from "../../components/Title";
import { RegisterUser } from "../../types/RegisterUser";
import { ScrollView, TouchableOpacity } from "react-native";
import { pickImage } from "../../utils/PickImageFunction";
import InputMask from "../../components/Mask";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../../styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ButtonBackPage from "../../components/ButtonBackPage";


const FormItem: React.FC = () => {
  const formRef: any = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState<any>(null);
  const [money, setMoney] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(true);

  function handleSubmit(data: RegisterUser) {
    console.log(data);
  }
  const selectPicture = async () => {
    try {
      const imageResponse: any = await pickImage();

      setImage(() => imageResponse);
    } catch (err) {
      return err;
    }
  };



  const itens = [
    {
      label: "Ativado",
      value: true,
    },
    {
      label: "Desativado",
      value: false,
    },
  ];

  return (
    <Container>
      <Content>
        <Title title="Estoque" />
        <ButtonBackPage/>
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label>Imagem:</Label>
            <TouchableOpacity onPress={selectPicture}>
              <Image source={image} />
            </TouchableOpacity>
            <Label>Nome do produto:</Label>
            <Input name="Nome:" placeholder="Nome:" />
            <Label>Descrição:</Label>
            <Input name="Descrição:" placeholder="Descrição do produto:" />
            <Label>Valor:</Label>
            <InputMask
              type="money"
              name="money"
              keyboardType="numeric"
              label="MONEY"
              placeholder="Digite o valor do produto:"
            />
            <Label>O Produto está:</Label>
            <Picker>
              <Select
                items={itens}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
                value={currentValue}
                setValue={(val) => setCurrentValue(val)}
                maxHeight={150}
                placeholder="Selecione"
                showTickIcon={true}
                showArrowIcon={false}
                disableBorderRadius={false}
                textStyle={{ color: styles.colors.primary }}
                containerStyle={{ backgroundColor: styles.colors.background }}
              />
            </Picker>

            <Choose>
              <Button
                style={{
                  flex: 1,
                  
                  backgroundColor: styles.colors.button_enter,
                }}
                onPress={() => formRef.current?.submitForm()}
                title="Adicionar Item ao Estoque"
              />
              <NewButton
                style={{
                  flex: 1,
                  
                  backgroundColor: styles.colors.button_exit,
                }}
                onPress={() => formRef.current?.submitForm()}
                title="Remover item do estoque"
              />
            </Choose>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default FormItem;