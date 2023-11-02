import React from "react";

import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { StyleSheet, View } from "react-native";

//Formas de declarar um componente, OBS: utiliza-se uma funcao
/* export function Cesta(){
  return <Text>Cesta</Text>
} */

export const Cesta = ({ header, details }) => {
  return (
    <>
      <Header {...header} />
      <View style={styles.details}>
        <Details {...details} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
