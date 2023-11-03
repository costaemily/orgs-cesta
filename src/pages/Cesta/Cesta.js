import React from "react";

import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { ScrollView, StyleSheet, View } from "react-native";
import { Items } from "./components/Items";

//Formas de declarar um componente, OBS: utiliza-se uma funcao
/* export function Cesta(){
  return <Text>Cesta</Text>
} */

export const Cesta = ({ header, details, items }) => {
  return (
    <ScrollView>
      <Header {...header} />
      <View style={styles.details}>
        <Details {...details} />
        <Items {...items} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
