import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FormItem from "../pages/FormItem";
import SingUp from "../pages/SingUp";
import ListEstoque from "../pages/ListEstoque";
import { ItemProps } from "../types/ItemEstoque";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  LogIn: undefined;
  Home: undefined;
  FormItem?: ItemProps;
  SingUp: undefined;

  ListEstoque?: ItemProps;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponet() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={Login}/>
        <Stack.Screen name="Home" component={Home } />
        <Stack.Screen name="FormItem" component={FormItem}/>
        <Stack.Screen name="SingUp" component={SingUp}/>
        <Stack.Screen name="ListEstoque" component={ListEstoque}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}