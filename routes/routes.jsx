import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Main from "../src/components/main";
import Asteroides from "../src/components/Asteroides";
import Detalle from "../src/components/Detalles";
import Clima from "../src/components/climaMarciano";
import Capsules from "../src/components/capsulas";
import Dragons from "../src/components/Dragons";
import Plataforms from "../src/components/lanzadores";
import Despegues from "../src/components/misiones";

const Stack = createNativeStackNavigator();
const rootStyles = {
  headerStyle: {
    backgroundColor: "#000000",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
  headerTitleAlign: "center",
  headerTintColor: "#FFF",
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Inicio" component={Main} options={rootStyles} />
        <Stack.Screen
          name="Asteroides"
          component={Asteroides}
          options={rootStyles}
        />
        <Stack.Screen
          name="Despegues"
          component={Despegues}
          options={rootStyles}
        />
        <Stack.Screen
          name="Satelites"
          component={Dragons}
          options={rootStyles}
        />

        <Stack.Screen
          name="detalles"
          component={Detalle}
          options={rootStyles}
        />
        <Stack.Screen name="Clima" component={Clima} options={rootStyles} />
        <Stack.Screen
          name="Capsulas"
          component={Capsules}
          options={rootStyles}
        />
        <Stack.Screen
          name="Lanzadores"
          component={Plataforms}
          options={rootStyles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
