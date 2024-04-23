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
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { pickImage } from "../../utils/PickImageFunction";
import InputMask from "../../components/Mask";
import styles from "../../styles";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import {
  patchAddItemAsync,
  patchRemoveItemAsync,
  postCreateImageAsync,
  postCreateItemAsync,
  putUpdateItemAsync,
} from "../services/stockService";
import { RegisterItemProps } from "../../types/RegisterItem";
import baseUrl from "../../config/baseUrl";

const FormItem: React.FC = () => {
  const formRef: any = useRef(null);
  const route = useRoute();
  const product: any = route.params;
  const [rawText, setRawText] = useState("");
  const [image, setImage] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    product?.id ? product?.is_active : true
  );

  const urlImage = `${baseUrl.URL}/image/${product?.image_path}`;
  console.log(product);
  async function handleSubmitCreateUser(data: RegisterItemProps) {
    try {
      if (data.description && data.name && data.value) {
        data.value = Number(rawText);
        data.is_active = currentValue;
        if (product?.id) {
          const response = await putUpdateItemAsync(data, product?.id);
          if (response && image) {
            const imagesData: any = new FormData();
            imagesData.append("file", {
              uri: image.uri,
              type: "image/jpeg",
              name: "test.jpg",
            });
            const resp = await postCreateImageAsync(imagesData, response.id);
            Alert.alert("Alterado com sucesso");
          }
          return true;
        } else {
          const response = await postCreateItemAsync(data);
          console.log(response);
          if (response && image) {
            const imagesData: any = new FormData();
            imagesData.append("file", {
              uri: image.uri,
              type: "image/jpeg",
              name: "test.jpg",
            });
            await postCreateImageAsync(imagesData, response.id);
          }
          Alert.alert("Criado com sucesso");
        }
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function RemoveItem() {
    try {
      await patchRemoveItemAsync(product.id);
      Alert.alert("Removido com sucesso");
    } catch (err) {
      return false;
    }
  }

  async function AddItem() {
    try {
      await patchAddItemAsync(product.id);
      Alert.alert("Adicionado com sucesso");
    } catch (err) {
      return false;
    }
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
        <Header title="Estoque" />
        <ScrollView>
          <Form
            ref={formRef}
            onSubmit={handleSubmitCreateUser}
            initialData={product || {}}
          >
            <Label>Imagem:</Label>
            <TouchableOpacity onPress={selectPicture}>
              <Image
                source={
                  !image && product?.image_path ? { uri: urlImage } : image
                }
              />
            </TouchableOpacity>
            <Label>Nome do produto:</Label>
            <Input name="name" placeholder="Nome:" />
            <Label>Descrição:</Label>
            <Input name="description" placeholder="Descrição do produto:" />
            <Label>Valor:</Label>
            <InputMask
              setRawText={setRawText}
              rawText={rawText}
              initial={product?.value || ""}
              type="money"
              name="value"
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
              {product?.id ? (
                <>
                  <Button
                    style={{
                      flex: 1,
                      backgroundColor: styles.colors.background_card_default,
                    }}
                    onPress={() => formRef.current?.submitForm()}
                    title="Atualizar Item"
                  />
                  <Button
                    style={{
                      flex: 1,

                      backgroundColor: styles.colors.button_enter,
                    }}
                    onPress={() => AddItem()}
                    title="Adicionar Item ao Estoque"
                  />
                  <NewButton
                    style={{
                      flex: 1,
                      backgroundColor: styles.colors.button_exit,
                    }}
                    onPress={() => RemoveItem()}
                    title="Remover item do estoque"
                  />
                </>
              ) : (
                <Button
                  style={{
                    flex: 1,
                    backgroundColor: styles.colors.button_enter,
                  }}
                  onPress={() => formRef.current?.submitForm()}
                  title="Criar Item"
                />
              )}
            </Choose>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default FormItem;
