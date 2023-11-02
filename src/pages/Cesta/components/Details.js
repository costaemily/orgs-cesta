import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { CostumText } from "../../../components/CostumText";

import LogoImagem from "../../../../assets/logo.png";

export function Details() {
  return (
    <>
      <CostumText style={styles.detaislTitle}>Cesta de Verduras</CostumText>
      <View style={styles.detailsFarmContainer}>
        <Image source={LogoImagem} style={styles.logoFarm} />
        <CostumText style={styles.detailsNameFarm}>Jenny Jack Farm</CostumText>
      </View>
      <CostumText style={styles.detailsDescription}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para a cozinha.
      </CostumText>
      <CostumText style={styles.detailsPrice}>R$ 40,00</CostumText>
    </>
  );
}

const styles = StyleSheet.create({
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
