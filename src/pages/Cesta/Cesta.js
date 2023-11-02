import React from "react";

import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { StyleSheet, View } from "react-native";

//Formas de declarar um componente, OBS: utiliza-se uma funcao
/* export function Cesta(){
  return <Text>Cesta</Text>
} */

export const Cesta = () => {
  return (
    <>
      <Header />
      <View style={styles.details}>
        <Details />
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
