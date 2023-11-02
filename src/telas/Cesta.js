import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import HeaderImage from "../../assets/topo.png";
import LogoImagem from "../../assets/logo.png";
import { CostumText } from "../components/CostumText";

const widthScreen = Dimensions.get("screen").width;

//Formas de declarar um componente, OBS: utiliza-se uma funcao
/* export function Cesta(){
  return <Text>Cesta</Text>
} */

export const Cesta = () => {
  return (
    <>
      <Image source={HeaderImage} style={styles.header} />
      <CostumText style={styles.title}>Detalhe da cesta</CostumText>
      <View style={styles.details}>
        <CostumText style={styles.detaislTitle}>Cesta de Verduras</CostumText>
        <View style={styles.detailsFarmContainer}>
          <Image source={LogoImagem} style={styles.logoFarm} />
          <CostumText style={styles.detailsNameFarm}>
            Jenny Jack Farm
          </CostumText>
        </View>
        <CostumText style={styles.detailsDescription}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para a cozinha.
        </CostumText>
        <CostumText style={styles.detailsPrice}>R$ 40,00</CostumText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: (578 / 768) * widthScreen,
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    paddingTop: 16,
  },
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  detaislTitle: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  detailsFarmContainer: {
    flexDirection: "row",
    gap: 16,
  },
  logoFarm: {
    width: 32,
    height: 32,
  },
  detailsNameFarm: {
    fontSize: 16,
    lineHeight: 26,
  },
  detailsDescription: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
  },
  detailsPrice: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
