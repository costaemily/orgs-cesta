import React from "react";

import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { FlatList, StyleSheet, View } from "react-native";
import { Item } from "./components/Item";
import { StyledText } from "../../components/StyledText";

//Formas de declarar um componente, OBS: utiliza-se uma funcao
/* export function Cesta(){
  return <Text>Cesta</Text>
} */

export const Cesta = ({ header, details, items }) => {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />
              <View style={styles.details}>
                <Details {...details} />
                <StyledText style={styles.title}>{items.title}</StyledText>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
